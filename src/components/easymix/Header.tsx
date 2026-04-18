import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/easymix-logo.png";

const navItems = [
  { label: "หน้าหลัก", to: "/" },
  { label: "สินค้า", to: "/products" },
  { label: "สูตรอาหาร", to: "/recipes" },
  { label: "ช่องทางการซื้อ", to: "/where-to-buy" },
  { label: "เกี่ยวกับ", to: "/about" },
  { label: "วิธีใช้", to: "/how-to" },
  { label: "บทความ", to: "/blog" },
  { label: "ติดต่อเรา", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="Easy Mix" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-smooth hover:text-primary relative ${
                  isActive
                    ? "text-primary after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-0.5 after:bg-primary"
                    : "text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/where-to-buy"
            className="hidden md:inline-flex items-center gap-1.5 gradient-red text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-red-sm cta-scale"
          >
            ซื้อเลย
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-2 text-sm font-medium rounded-lg transition-smooth ${
                  pathname === item.to
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/where-to-buy"
              onClick={() => setOpen(false)}
              className="mt-2 gradient-red text-white text-center py-3 rounded-full font-bold text-sm shadow-red-sm"
            >
              ซื้อเลย
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
