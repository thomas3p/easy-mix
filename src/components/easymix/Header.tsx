import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "@/assets/easymix-logo.png";

const navItems = [
  { label: "หน้าหลัก", href: "#home" },
  { label: "สินค้า", href: "#products" },
  { label: "สูตรอาหาร", href: "#recipes" },
  { label: "ร้านค้า", href: "#shop" },
  { label: "เกี่ยวกับ", href: "#about" },
  { label: "บทความ", href: "#blog" },
  { label: "ติดต่อเรา", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"TH" | "EN">("TH");

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex h-20 items-center justify-between gap-6">
        <a href="#home" className="flex items-center shrink-0">
          <img src={logo} alt="Easy Mix" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-smooth hover:text-primary relative ${
                i === 0 ? "text-primary after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-0.5 after:bg-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </a>
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
          <button aria-label="Cart" className="relative p-2 text-foreground hover:text-primary transition-smooth">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">2</span>
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium hover:text-primary transition-smooth">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
