import { useEffect, useState } from "react";

export function useMenuData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("./menu-data.json", { cache: "no-store" });
        if (!res.ok) throw new Error("menu-data.json not found");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
        setData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, setData, loading };
}
