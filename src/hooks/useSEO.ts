/**
 * useSEO — Dynamic meta tag management
 * ใช้ใน Page components เพื่อ set title + description ต่อหน้า
 */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

const SITE = "Easy Mix";
const DEFAULT_DESC = "Easy Mix ซอสปรุงรสสูตรเชฟ ทำอาหารง่าย ประหยัดเวลา รสชาติเข้มข้น";

const setMeta = (name: string, content: string, prop = false) => {
  const attr = prop ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const useSEO = ({ title, description = DEFAULT_DESC, image }: SEOProps) => {
  useEffect(() => {
    const full = `${title} — ${SITE}`;
    document.title = full;
    setMeta("description", description);
    setMeta("og:title", full, true);
    setMeta("og:description", description, true);
    if (image) setMeta("og:image", image, true);
  }, [title, description, image]);
};
