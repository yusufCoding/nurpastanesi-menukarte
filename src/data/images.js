// Alle Bilder automatisch importieren
const images = import.meta.glob("../assets/*.{jpg,png,jpeg,webp}", {
  eager: true,
  import: "default",
});

// In sauberes Objekt umwandeln
export const menuImages = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const fileName = path.split("/").pop(); // kahvalti-1.jpg
    const key = fileName.replace(/\.(jpg|png|jpeg|webp)$/, ""); // kahvalti-1
    return [key, module];
  })
);
