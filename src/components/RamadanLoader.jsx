import { useEffect, useMemo, useState } from "react";
import "../styles/ramadanLoader.scss";
import logo from "../assets/logo.png";


export default function RamadanLoader({
    lang = "tr",
    durationMs = 2400,
    onDone,
}) {
    const [phase, setPhase] = useState("in"); // in | out

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("out"), durationMs);
        const t2 = setTimeout(() => onDone?.(), durationMs + 450);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [durationMs, onDone]);

    // kleine zufällige Sterne (sehen organischer aus)
    const stars = useMemo(() => {
        return Array.from({ length: 18 }).map((_, i) => ({
            id: i,
            top: `${8 + Math.random() * 70}%`,
            left: `${8 + Math.random() * 84}%`,
            delay: `${Math.random() * 1.8}s`,
            size: `${6 + Math.random() * 10}px`,
            opacity: 0.45 + Math.random() * 0.35,
        }));
    }, []);

    const copy =
        lang === "de"
            ? {
                title: "Nur Pastanesi",
                sub: "wünscht Ihnen eine schöne Ramadan-Zeit",
            }
            : {
                title: "Nur Pastanesi",
                sub: "Hayırlı Ramazanlar diler",
            };

    return (
        <div className={`ramadan ${phase === "out" ? "ramadan--out" : ""}`}>
            <div className="ramadan__bg" aria-hidden="true">
                <div className="ramadan__pattern" />
                <div className="ramadan__vignette" />
                {stars.map((s) => (
                    <span
                        key={s.id}
                        className="ramadan__star"
                        style={{
                            top: s.top,
                            left: s.left,
                            animationDelay: s.delay,
                            width: s.size,
                            height: s.size,
                            opacity: s.opacity,
                        }}
                    />
                ))}
                <div className="ramadan__dust" />
            </div>
            <div className="ramadan__card" role="status" aria-live="polite">
                <div className="ramadan__frame" aria-hidden="true" />

                <div className="ramadan__head">
                    <img className="ramadan__logo" src={logo} alt="Nur Pastanesi" />
                    <div className="ramadan__brand">{copy.title}</div>
                </div>

                <div className="ramadan__scene" aria-hidden="true">
                    <div className="ramadan__crescent" />
                    <div className="ramadan__hang h1">
                        <div className="ramadan__chain" />
                        <div className="ramadan__lantern" />
                    </div>
                    <div className="ramadan__hang h2">
                        <div className="ramadan__chain" />
                        <div className="ramadan__lantern ramadan__lantern--small" />
                    </div>
                    <div className="ramadan__hang h3">
                        <div className="ramadan__chain" />
                        <div className="ramadan__lantern" />
                    </div>
                    <div className="ramadan__glow" />
                </div>

                <div className="ramadan__text">
                    <div className="ramadan__line1">
                        Nur Pastanesi Hayırlı Ramazanlar diler ✨
                    </div>
                    <div className="ramadan__line2">
                        Nur Pastanesi wünscht Ihnen eine schöne Ramadan Zeit
                    </div>
                </div>

                <div className="ramadan__bar" aria-hidden="true">
                    <span />
                </div>
            </div>
        </div>
    );
}

