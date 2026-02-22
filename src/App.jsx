import { useEffect, useState } from "react";
import Header from "./components/Header";
import CategoryAccordion from "./components/CategoryAccordion";
//import { menuCategories } from "./data/menuData";
import { useMenuData } from "./hooks/useMenuData";
import AdminPanel from "./components/AdminPanel";
import RamadanLoader from "./components/RamadanLoader";




function getLangFromUrl() {
  const p = new URLSearchParams(window.location.search);
  const l = p.get("lang");
  return l === "de" || l === "tr" ? l : null;
}


export default function App() {
  const [lang, setLang] = useState("tr");
  const { data, setData, loading } = useMenuData();
  const [showLoader, setShowLoader] = useState(true);

  // 1) URL > 2) localStorage > 3) default TR
  useEffect(() => {
    const urlLang = getLangFromUrl();
    const saved = localStorage.getItem("lang");
    setLang(urlLang || saved || "tr");
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  if (loading) return null; // oder <div>Loading...</div>
  if (!data) return <div style={{ padding: 16 }}>Menü konnte nicht geladen werden.</div>;

  const menuCategories = data.categories ?? [];
  const brand = data.brand ?? null;
  const isAdmin = (() => {
    const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
    return window.location.pathname.startsWith(`${base}/admin`);
  })();


  return (
    <div className="page">
      {showLoader && (
        <RamadanLoader
          lang={lang}
          durationMs={2600}
          onDone={() => setShowLoader(false)}
        />
      )}
      <Header lang={lang} onLangChange={setLang} />
      <main className="content">
        {isAdmin ? (
          <AdminPanel data={data} setData={setData} />
        ) : (
          <>
            <div className="menu-note">
              * {lang === "tr" ? "Fotoğraflar temsilidir." : "Fotos dienen nur als Beispiel."}
            </div>
            <CategoryAccordion categories={menuCategories} lang={lang} />
          </>
        )}
      </main>
    </div>
  );
}
