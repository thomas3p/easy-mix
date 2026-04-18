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
  const [lang, setLang] = useState<"TH" | "EN">("TH");
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
          <button
            onClick={() => setLang(lang === "TH" ? "EN" : "TH")}
            className="hidden sm:flex text-sm font-medium text-foreground hover:text-primary transition-smooth"
            aria-label="Switch language"
          >
            <span className={lang === "TH" ? "text-primary" : ""}>TH</span>
            <span className="mx-1.5 text-muted-foreground">|</span>
            <span className={lang === "EN" ? "text-primary" : ""}>EN</span>
          </button>
          <Link
            to="/where-to-buy"
            className="hidden md:inline-flex items-center gap-1.5 gradient-red text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-red hover:scale-105 transition-smooth"
          >
            ซื้อเลย
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-sm font-medium transition-smooth ${
                  pathname === item.to ? "text-primary" : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
