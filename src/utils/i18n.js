export function t(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;      // noch nicht übersetzt
  return value[lang] ?? value.tr ?? "";
}