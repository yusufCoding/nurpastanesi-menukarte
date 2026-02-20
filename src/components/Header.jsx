import "../styles/header.scss";
import { brand } from "../data/menuData";

export default function Header({ lang, onLangChange }) {
  return (
    <header className="header">
      <div className="logo-wrap">
        <img className="header__logo" src={brand.logo} alt="Logo" />
      </div>

      <div className="header__text">
        <div className="header__title">{brand.title}</div>
        <div className="header__subtitle">{lang === "tr" ? "Menü" : "Speisekarte"}</div>
      </div>

      <div className="langSwitch">
        <button className={lang === "tr" ? "active" : ""} onClick={() => onLangChange("tr")} type="button">
          TR
        </button>
        <button className={lang === "de" ? "active" : ""} onClick={() => onLangChange("de")} type="button">
          DE
        </button>
      </div>
    </header>
  );
}
