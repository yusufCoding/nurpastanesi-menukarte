import { useMemo, useRef, useState } from "react";
import "../styles/accordion.scss";
import CategoryPanel from "./CategoryPanel";
import { menuImages } from "../data/images";


export default function CategoryAccordion({ categories, lang }) {
  const items = useMemo(() => categories ?? [], [categories]);
  const [openId, setOpenId] = useState(null);

  // refs pro Kategorie (für automatisches Scrollen)
  const rowRefs = useRef({});

  const handleToggle = (catId) => {
    setOpenId((prev) => {
      const next = prev === catId ? null : catId;

      // nach dem Öffnen automatisch scrollen
      if (next) {
        requestAnimationFrame(() => {
          const el = rowRefs.current[next];
          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      }

      return next;
    });
  };

  return (
    <div className="accordion">
      {items.map((cat) => {
        const isOpen = cat.id === openId;

        return (
          <div
            key={cat.id}
            className="accordion__block"
            ref={(el) => (rowRefs.current[cat.id] = el)}
          >
            <button
              className={`accordion__bar ${isOpen ? "is-open" : ""}`}
              onClick={() => handleToggle(cat.id)}
              type="button"
            >
              <span className="accordion__icon">{isOpen ? "–" : "+"}</span>

              {/* Titel bleibt wie vorher */}
              <span className="accordion__title">
                {typeof cat.title === "string" ? cat.title : cat.title?.[lang] ?? cat.title?.tr}
              </span>

              {/* Hintergrundbild bleibt per CSS (Design bleibt!) */}
              <span
                className="accordion__cover"
                style={{ backgroundImage: `url(${menuImages[cat.coverImageKey]})` }}
                aria-hidden="true"
              />
            </button>

            {isOpen && <CategoryPanel category={cat} lang={lang} />}
          </div>
        );
      })}
    </div>
  );
}
