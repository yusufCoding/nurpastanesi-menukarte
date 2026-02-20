import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/convert-menu-to-json.mjs <path/to/menuData.i18n.js>");
  process.exit(1);
}

const absInput = path.resolve(process.cwd(), inputPath);
let code = fs.readFileSync(absInput, "utf8");

// 1) import-Zeilen entfernen
code = code.replace(/^import\s+.*?;$/gm, "");

// 2) export const brand/menuCategories auf globalThis umbiegen (WICHTIG!)
code = code.replace(/export\s+const\s+brand\s*=/g, "globalThis.brand =");
code = code.replace(/export\s+const\s+menuCategories\s*=/g, "globalThis.menuCategories =");

// 3) sonstige export const -> const (optional)
code = code.replace(/export\s+const\s+/g, "const ");

// Sandbox: menuImages["..."] => liefert Key-String zurück
const sandbox = {
  console,
  globalThis: {},

  // brand.logo kommt aus "logo" variable -> wir geben sie hier vor
  logo: "/assets/logo.png",

  menuImages: new Proxy(
    {},
    {
      get: (_target, prop) => String(prop),
    }
  ),
};

const context = vm.createContext(sandbox);
vm.runInContext(code, context);

// Aus globalThis ziehen
const brand = context.globalThis.brand;
const menuCategories = context.globalThis.menuCategories;

if (!brand) {
  console.error("❌ brand wurde nicht gefunden. Prüfe, ob `export const brand = ...` existiert.");
  process.exit(1);
}
if (!Array.isArray(menuCategories)) {
  console.error("❌ menuCategories wurde nicht gefunden oder ist kein Array. Prüfe `export const menuCategories = [...]`.");
  process.exit(1);
}

// Helpers
function transformItem(item) {
  const out = { ...item };

  if ("image" in out) {
    out.imageKey = out.image; // image war schon key-string (proxy)
    delete out.image;
  }

  if (out.price === "") out.price = null;

  return out;
}

function transformCategory(cat) {
  const out = { ...cat };

  if ("coverImage" in out) {
    out.coverImageKey = out.coverImage; // coverImage war schon key-string (proxy)
    delete out.coverImage;
  }

  if (out.panel?.featured?.length) {
    out.panel = { ...out.panel };
    out.panel.featured = out.panel.featured.map(transformItem);
  }

  if (out.panel?.sections?.length) {
    out.panel = { ...out.panel };
    out.panel.sections = out.panel.sections.map((sec) => ({
      ...sec,
      items: (sec.items ?? []).map(transformItem),
    }));
  }

  return out;
}

const result = {
  brand: {
    ...brand,
    logoPath: "/assets/logo.png",
  },
  categories: menuCategories.map(transformCategory),
};

// logo raus, logoPath reicht
delete result.brand.logo;

const outPath = path.resolve(process.cwd(), "public/menu-data.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(result, null, 2), "utf8");

console.log("✅ Written:", outPath);
console.log("✅ Categories:", result.categories.length);
