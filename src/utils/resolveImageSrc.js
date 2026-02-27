import { menuImages } from "../data/images";

export function resolveImageSrc(imageKey) {
  if (!imageKey) return "";

  // absolute URL
  if (/^https?:\/\//i.test(imageKey)) return imageKey;

  // server path (uploads etc.)
  if (imageKey.startsWith("/")) return imageKey;

  // assets-key (aus import.meta.glob)
  return menuImages[imageKey] ?? "";
}