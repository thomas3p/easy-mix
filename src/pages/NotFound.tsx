import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="text-primary font-extrabold text-6xl mb-4">404</p>
        <h1 className="text-2xl font-extrabold mb-2">ไม่พบหน้านี้</h1>
        <p className="text-muted-foreground mb-8">ขออภัย หน้าที่คุณค้นหาไม่มีอยู่</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 gradient-red text-white px-7 py-3.5 rounded-full font-bold shadow-red-sm"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
