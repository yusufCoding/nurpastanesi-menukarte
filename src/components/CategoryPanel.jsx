import "../styles/panel.scss";
import { t } from "../utils/i18n";
import { menuImages } from "../data/images"; // Pfad ggf. anpassen
import { resolveImageSrc } from "../utils/resolveImageSrc";


export default function CategoryPanel({ category, lang }) {
  const panel = category.panel;


  return (
    <section className="panel">
      {/* Überschrift */}
      <div className="panel__headline">
        <h2>{t(panel?.headline, lang) || t(category.title, lang)}</h2>
        <div className="panel__dots" />
      </div>

      {/* Featured Karten (z.B. 2 nebeneinander) */}
      {panel?.featured?.length > 0 && (
        <div className="panel__featured">
          {panel.featured.map((f) => (
            <article key={t(f.name, lang)} className="featuredCard">
              <div className="featuredCard__imgWrap">
                <img
                  src={resolveImageSrc(f.imageKey)}
                  alt={t(f.name, lang)}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="featuredCard__meta">
                <div className="featuredCard__name">
                  {t(f.name, lang)}
                </div>

                {f.description && (
                  <div className="featuredCard__desc">
                    {(() => {
                      const desc = t(f.description, lang) ?? "";
                      const lines = desc
                        .split(/\s*\|\s*|\n/)
                        .map((s) => s.trim())
                        .filter(Boolean);

                      return lines.length > 1 ? (
                        <ul className="descList">
                          {lines.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      ) : (
                        <div>{desc}</div>
                      );
                    })()}
                  </div>
                )}
                <div className="featuredCard__price">
                  {typeof f.price === "number" ? (
                    (() => {
                      const { intPart, decPart } = formatPrice(f.price);
                      return (
                        <>
                          <span className="price">
                            {intPart}
                            <span className="price-decimal">,{decPart}</span>
                          </span>{" "}
                          <span className="cur">{f.currency}</span>
                        </>
                      );
                    })()
                  ) : (
                    <span className="muted">—</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Sections / Item-Listen */}
      {(panel?.sections ?? []).map((sec) => (
        <div key={t(sec.title, lang)} className="panel__section">
          <div className="panel__headline panel__headline--sm">
            <h3>{t(sec.title, lang)}</h3>
            <div className="panel__dots" />
          </div>

          <div className="itemGrid">
            {sec.items.map((it) => (
              <div key={t(it.name, lang)} className="itemRow">
                <div className="itemRow__name">
                  {t(it.name, lang)}
                </div>

                <div className="itemRow__price">
                  {typeof it.price === "number" ? (
                    <>
                      {(() => {
                        const { intPart, decPart } = formatPrice(it.price);
                        return (
                          <>
                            <span className="price">
                              {intPart}
                              <span className="price-decimal">,{decPart}</span>
                            </span>{" "}
                            <span className="cur">{it.currency}</span>
                          </>
                        );
                      })()}
                    </>
                  ) : (
                    <span className="muted">—</span>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function formatPrice(n) {
  if (typeof n !== "number") return { intPart: "", decPart: "" };

  const [intPart, decPart] = n.toFixed(2).split(".");
  return { intPart, decPart };
}

