import { useMemo, useState } from "react";
import { menuImages } from "../data/images"; // <- wichtig
import "../styles/admin.scss";


export default function AdminPanel({ data, setData }) {
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [msg, setMsg] = useState("");
  const [openCatId, setOpenCatId] = useState(null);

  const categories = useMemo(() => data?.categories ?? [], [data]);
  const [customImages, setCustomImages] = useState([]);
  const imageKeys = [
    ...Object.keys(menuImages),
    ...customImages,
  ];
  const [q, setQ] = useState("");
  const [backups, setBackups] = useState([]);
  const [selectedBackup, setSelectedBackup] = useState("");

  const API = `${import.meta.env.BASE_URL}api/admin`;


  async function login() {
    setMsg("");
    const res = await fetch(`${API}/login.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsAuthed(true);
      loadBackups();
      setMsg("✅ Eingeloggt");
    } else {
      setMsg("❌ Passwort falsch");
    }
  }

  async function save() {
    setMsg("");
    const res = await fetch(`${API}/save.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok && json.ok) {
      setMsg("✅ Gespeichert!");
      loadBackups();
    }
    else setMsg("❌ Speichern fehlgeschlagen");
  }

  async function restore() {
    if (!selectedBackup) return;

    const ok = window.confirm(`Backup wiederherstellen?\n${selectedBackup}`);
    if (!ok) return;

    const res = await fetch(`${API}/restore.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ file: selectedBackup }),
    });

    const json = await res.json().catch(() => ({}));
    if (res.ok && json.ok) {
      setMsg("✅ Wiederhergestellt!");

      // Menü neu laden und im Admin sofort anzeigen
      const r2 = await fetch(`${API}/load-menu.php`, {
        credentials: "include",
      });
      const fresh = await r2.json();
      setData(fresh);

      // Backup-Liste aktualisieren
      loadBackups();
    } else {
      setMsg("❌ Restore fehlgeschlagen");
    }
  }

  function updateFeatured(catId, index, updater) {
    setData((prev) => {
      const next = structuredClone(prev);
      const cat = next.categories.find((c) => c.id === catId);
      if (!cat?.panel) cat.panel = {};
      if (!Array.isArray(cat.panel.featured)) cat.panel.featured = [];
      const item = cat.panel.featured[index];
      if (!item) return prev;
      updater(item);
      return next;
    });
  }

  function addFeatured(catId) {
    setData((prev) => {
      const next = structuredClone(prev);
      const cat = next.categories.find((c) => c.id === catId);
      if (!cat?.panel) cat.panel = {};
      if (!Array.isArray(cat.panel.featured)) cat.panel.featured = [];
      cat.panel.featured.push({
        name: { tr: "", de: "" },
        description: { tr: "", de: "" },
        imageKey: imageKeys[0] ?? "",
        price: null,
        currency: "Euro",
      });
      return next;
    });
  }

  function deleteFeatured(catId, index) {
    setData((prev) => {
      const next = structuredClone(prev);
      const cat = next.categories.find((c) => c.id === catId);
      if (!cat?.panel?.featured) return prev;
      cat.panel.featured.splice(index, 1);
      return next;
    });
  }

  function moveFeatured(catId, fromIndex, direction) {
    setData((prev) => {
      const next = structuredClone(prev);
      const cat = next.categories.find((c) => c.id === catId);
      const arr = cat?.panel?.featured;
      if (!Array.isArray(arr)) return prev;

      const toIndex = fromIndex + direction;
      if (toIndex < 0 || toIndex >= arr.length) return prev;

      const tmp = arr[fromIndex];
      arr[fromIndex] = arr[toIndex];
      arr[toIndex] = tmp;
      return next;
    });
  }

  function duplicateFeatured(catId, index) {
    setData((prev) => {
      const next = structuredClone(prev);
      const cat = next.categories.find((c) => c.id === catId);
      const arr = cat?.panel?.featured;
      if (!Array.isArray(arr) || !arr[index]) return prev;

      const copy = structuredClone(arr[index]);
      arr.splice(index + 1, 0, copy);
      return next;
    });
  }

  function addCategory() {
    setData((prev) => {
      const next = structuredClone(prev);
      next.categories ??= [];

      const id = `cat-${Date.now()}`; // unique enough

      next.categories.unshift({
        id,
        title: { tr: "Yeni Kategori", de: "Neue Kategorie" },
        // coverImageKey nur, wenn du es bereits nutzt – sonst weglassen
        coverImage: "",

        panel: {
          featured: [],
        },
      });

      return next;
    });

    setOpenCatId(null);
    setMsg("✅ Neue Kategorie angelegt – Titel anpassen & Items hinzufügen.");
  }

  function moveCategory(fromIndex, direction) {
    setData((prev) => {
      const next = structuredClone(prev);
      const arr = next.categories ?? [];
      const toIndex = fromIndex + direction;
      if (toIndex < 0 || toIndex >= arr.length) return prev;

      const tmp = arr[fromIndex];
      arr[fromIndex] = arr[toIndex];
      arr[toIndex] = tmp;

      next.categories = arr;
      return next;
    });
  }

  function deleteCategory(catId) {
    const ok = window.confirm("Kategorie wirklich löschen? (Alle Items gehen verloren)");
    if (!ok) return;

    setData((prev) => {
      const next = structuredClone(prev);
      next.categories = (next.categories ?? []).filter((c) => c.id !== catId);
      return next;
    });

    setOpenCatId((prev) => (prev === catId ? null : prev));
    setMsg("✅ Kategorie gelöscht (bitte speichern).");
  }


  async function loadBackups() {
    const res = await fetch(`${API}/list-backups.php`, {
      credentials: "include",
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok && json.ok) setBackups(json.backups || []);
  }


  if (!isAuthed) {
    return (
      <div className="adminLoginOverlay">
        <div className="adminLogin">
          <div className="adminLogin__card">
            <div className="adminLogin__head">
              <div className="adminLogin__badge">Nur Pastanesi</div>
              <h2 className="adminLogin__title">Admin Login</h2>
              <p className="adminLogin__sub">
                Bitte Passwort eingeben, um das Panel zu öffnen.
              </p>
            </div>

            <div className="adminLogin__form">
              <label className="adminLogin__label">Passwort</label>

              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                onKeyDown={(e) => {
                  if (e.key === "Enter") login();
                }}
              />

              <button className="btn btn--primary btn--block" onClick={login}>
                Einloggen
              </button>

              {msg && (
                <div className={`adminLogin__msg ${msg.includes("✅") ? "is-ok" : "is-bad"}`}>
                  {msg}
                </div>
              )}

              <div className="adminLogin__hint">
                Tipp: Enter drücken zum Einloggen.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="adminOverlay">
      <div className="admin">
        <header className="admin__topbar">
          <div className="admin__brand">
            <div className="admin__title">Nur Pastanesi</div>
            <div className="admin__subtitle">Admin Panel</div>
          </div>

          <div className="admin__status">
            <span className="pill pill--warn">Ungespeichert</span>
            {msg && <span className="admin__msg">{msg}</span>}
          </div>

          <div className="admin__actions">
            <button className="btn btn--primary" onClick={save}>Speichern</button>

            <div className="admin__restore">
              <select
                className="select"
                value={selectedBackup}
                onChange={(e) => setSelectedBackup(e.target.value)}
              >
                <option value="">Backup auswählen…</option>
                {backups.map((b) => (
                  <option key={b.file} value={b.file}>{b.file}</option>
                ))}
              </select>

              <button className="btn" onClick={restore}>Restore</button>
            </div>
          </div>
        </header>

        <main className="admin__layout">
          {/* Sidebar / Tools */}
          <aside className="admin__side">
            <section className="panel">
              <div className="panel__head">
                <div className="panel__title">Tools</div>
                <div className="panel__sub">Kategorien & Upload</div>
              </div>

              <div className="stack">
                <button onClick={addCategory} className="btn btn--block">
                  + Kategorie
                </button>

                <label className="file">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const fd = new FormData();
                      fd.append("file", file);

                      const res = await fetch(`${API}/upload.php`, {
                        method: "POST",
                        credentials: "include",
                        body: fd,
                      });

                      const json = await res.json().catch(() => ({}));

                      if (res.ok && json.ok) {
                        const key = json.url;
                        setCustomImages((prev) => (prev.includes(key) ? prev : [...prev, key]));
                        setMsg("✅ Bild hochgeladen & verfügbar");
                      } else {
                        setMsg(`❌ Upload fehlgeschlagen: ${json.error ?? res.status}`);
                      }
                      e.target.value = "";
                    }}
                  />
                  <span className="file__btn">Bild hochladen</span>
                  <span className="file__hint">JPG/PNG/WebP</span>
                </label>
              </div>
            </section>

            <section className="panel">
              <div className="panel__head">
                <div className="panel__title">Suche</div>
                <div className="panel__sub">TR/DE</div>
              </div>

              <input
                className="input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Suche (TR/DE)..."
              />
            </section>
          </aside>

          {/* Content */}
          <section className="admin__content">
            <div className="admin__list">
              {categories
                .filter((cat) => {
                  if (!q.trim()) return true;
                  const qq = q.trim().toLowerCase();
                  const featured = cat.panel?.featured ?? [];
                  const catText = `${cat.title?.tr ?? ""} ${cat.title?.de ?? ""}`.toLowerCase();
                  const hasInCat = catText.includes(qq);
                  const hasInItems = featured.some((it) => {
                    const ntr = (it.name?.tr ?? "").toLowerCase();
                    const nde = (it.name?.de ?? "").toLowerCase();
                    return ntr.includes(qq) || nde.includes(qq);
                  });
                  return hasInCat || hasInItems;
                })
                .map((cat, idx) => {
                  const isOpen = openCatId === cat.id;
                  const featured = cat.panel?.featured ?? [];

                  return (
                    <article key={cat.id} className={`cat ${isOpen ? "is-open" : ""}`}>
                      <button
                        type="button"
                        className="cat__head"
                        onClick={() => setOpenCatId(isOpen ? null : cat.id)}
                      >
                        <div className="cat__meta">
                          <div className="cat__title">{cat.title?.tr ?? cat.id}</div>
                          <div className="cat__sub">{cat.title?.de ?? ""}</div>
                        </div>

                        <div className="cat__tools" onClick={(e) => e.stopPropagation()}>
                          <button className="iconbtn" title="Nach oben" onClick={() => moveCategory(idx, -1)}>↑</button>
                          <button className="iconbtn" title="Nach unten" onClick={() => moveCategory(idx, +1)}>↓</button>
                          <button className="iconbtn iconbtn--danger" title="Löschen" onClick={() => deleteCategory(cat.id)}>🗑</button>
                          <span className="cat__chev">{isOpen ? "–" : "+"}</span>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="cat__body">
                          {/* hier drin kannst du deinen bestehenden Inhalt lassen,
                          aber bitte mit den neuen Klassen (siehe SCSS) */}
                          {/* Kategorie Titel */}
                          <div className="card">
                            <div className="card__title">Kategorie Titel</div>

                            <div className="grid2">
                              <div className="field">
                                <div className="label">Titel (TR)</div>
                                <input
                                  className="input"
                                  value={cat.title?.tr ?? ""}
                                  onChange={(e) =>
                                    setData((prev) => {
                                      const next = structuredClone(prev);
                                      const c = next.categories.find((x) => x.id === cat.id);
                                      c.title ??= {};
                                      c.title.tr = e.target.value;
                                      return next;
                                    })
                                  }
                                />
                              </div>

                              <div className="field">
                                <div className="label">Titel (DE)</div>
                                <input
                                  className="input"
                                  value={cat.title?.de ?? ""}
                                  onChange={(e) =>
                                    setData((prev) => {
                                      const next = structuredClone(prev);
                                      const c = next.categories.find((x) => x.id === cat.id);
                                      c.title ??= {};
                                      c.title.de = e.target.value;
                                      return next;
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          {/* Panel Headline */}
                          <div className="card">
                            <div className="card__title">Panel Headline</div>

                            <div className="grid2">
                              <div className="field">
                                <div className="label">Headline (TR)</div>
                                <input
                                  className="input"
                                  value={cat.panel?.headline?.tr ?? ""}
                                  onChange={(e) =>
                                    setData((prev) => {
                                      const next = structuredClone(prev);
                                      const c = next.categories.find((x) => x.id === cat.id);
                                      c.panel ??= {};
                                      c.panel.headline ??= {};
                                      c.panel.headline.tr = e.target.value;
                                      return next;
                                    })
                                  }
                                />
                              </div>

                              <div className="field">
                                <div className="label">Headline (DE)</div>
                                <input
                                  className="input"
                                  value={cat.panel?.headline?.de ?? ""}
                                  onChange={(e) =>
                                    setData((prev) => {
                                      const next = structuredClone(prev);
                                      const c = next.categories.find((x) => x.id === cat.id);
                                      c.panel ??= {};
                                      c.panel.headline ??= {};
                                      c.panel.headline.de = e.target.value;
                                      return next;
                                    })
                                  }
                                />
                              </div>
                            </div>

                            <div className="hint">
                              Wird als Überschrift im Panel angezeigt (über den Items).
                            </div>
                          </div>

                          {/* Featured Header */}
                          <div className="row row--between">
                            <div className="h3">Featured Items</div>
                            <button className="btn" onClick={() => addFeatured(cat.id)}>+ Item</button>
                          </div>

                          {featured.length === 0 && <div className="muted">Keine Items vorhanden.</div>}

                          {/* Items */}
                          <div className="items">
                            {featured.map((it, i2) => (
                              <div className="item" key={i2}>
                                <div className="item__head">
                                  <div className="thumb">
                                    {it.imageKey ? (
                                      <img
                                        src={it.imageKey.startsWith("/") ? it.imageKey : menuImages[it.imageKey]}
                                        alt=""
                                        loading="lazy"
                                      />
                                    ) : null}
                                  </div>

                                  <div className="item__name">
                                    {it.name?.tr || it.name?.de || "Neues Item"}
                                  </div>

                                  <div className="item__btns">
                                    <button className="iconbtn" onClick={() => moveFeatured(cat.id, i2, -1)}>↑</button>
                                    <button className="iconbtn" onClick={() => moveFeatured(cat.id, i2, +1)}>↓</button>
                                    <button className="iconbtn" onClick={() => duplicateFeatured(cat.id, i2)}>⎘</button>
                                    <button className="iconbtn iconbtn--danger" onClick={() => deleteFeatured(cat.id, i2)}>🗑</button>
                                  </div>
                                </div>

                                <div className="grid2">
                                  <div className="field">
                                    <div className="label">Name (TR)</div>
                                    <input
                                      className="input"
                                      value={it.name?.tr ?? ""}
                                      onChange={(e) => updateFeatured(cat.id, i2, (item) => {
                                        item.name ??= {};
                                        item.name.tr = e.target.value;
                                      })}
                                    />
                                  </div>
                                  <div className="field">
                                    <div className="label">Name (DE)</div>
                                    <input
                                      className="input"
                                      value={it.name?.de ?? ""}
                                      onChange={(e) => updateFeatured(cat.id, i2, (item) => {
                                        item.name ??= {};
                                        item.name.de = e.target.value;
                                      })}
                                    />
                                  </div>
                                </div>

                                <div className="grid2">
                                  <div className="field">
                                    <div className="label">Beschreibung (TR)</div>
                                    <textarea
                                      className="textarea"
                                      rows={3}
                                      value={it.description?.tr ?? ""}
                                      onChange={(e) => updateFeatured(cat.id, i2, (item) => {
                                        item.description ??= {};
                                        item.description.tr = e.target.value;
                                      })}
                                    />
                                    <div className="hint">Tipp: Enter oder “|” für Liste</div>
                                  </div>
                                  <div className="field">
                                    <div className="label">Beschreibung (DE)</div>
                                    <textarea
                                      className="textarea"
                                      rows={3}
                                      value={it.description?.de ?? ""}
                                      onChange={(e) => updateFeatured(cat.id, i2, (item) => {
                                        item.description ??= {};
                                        item.description.de = e.target.value;
                                      })}
                                    />
                                    <div className="hint">Tipp: Enter oder “|” für Liste</div>
                                  </div>
                                </div>

                                <div className="grid3">
                                  <div className="field">
                                    <div className="label">Bild</div>
                                    <select
                                      className="select"
                                      value={it.imageKey ?? ""}
                                      onChange={(e) => updateFeatured(cat.id, i2, (item) => { item.imageKey = e.target.value; })}
                                    >
                                      <option value="">(kein Bild)</option>
                                      {imageKeys.map((k) => <option key={k} value={k}>{k}</option>)}
                                    </select>
                                  </div>

                                  <div className="field">
                                    <div className="label">Preis</div>
                                    <input
                                      className="input"
                                      value={typeof it.price === "number" ? String(it.price) : ""}
                                      onChange={(e) => {
                                        const v = e.target.value.trim();
                                        updateFeatured(cat.id, i2, (item) => {
                                          item.price = v === "" ? null : Number(v.replace(",", "."));
                                          if (Number.isNaN(item.price)) item.price = null;
                                        });
                                      }}
                                      placeholder="z.B. 9.90"
                                    />
                                  </div>

                                  <div className="field">
                                    <div className="label">Währung</div>
                                    <input
                                      className="input"
                                      value={it.currency ?? "Euro"}
                                      onChange={(e) => updateFeatured(cat.id, i2, (item) => { item.currency = e.target.value; })}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
