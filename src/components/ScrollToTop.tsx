/**
 * ScrollToTop
 * Scroll window ไปบนสุดทุกครั้งที่ pathname เปลี่ยน
 * วาง <ScrollToTop /> ไว้ใน BrowserRouter ครั้งเดียวจบ
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
