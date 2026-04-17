import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import single from "@/assets/product-single.jpg";
import double from "@/assets/product-double.jpg";

const products = [
  { id: 1, name: "ซอสปรุงรส ตราอีซี่มิกซ์ 600 มล.", price: 65, img: single, badge: "ยอดฮิต" },
  { id: 2, name: "ซอสปรุงรส ตราอีซี่มิกซ์ 200 มล.", price: 35, img: single },
  { id: 3, name: "ซอสปรุงรส ตราอีซี่มิกซ์ 600 มล. 2 ขวด", price: 119, original: 130, img: double, badge: "คุ้มกว่า" },
  { id: 4, name: "ซอสปรุงรส ตราอีซี่มิกซ์ 200 มล. 2 ขวด", price: 59, original: 70, img: double, badge: "คุ้มกว่า" },
];

const tabs = ["ทั้งหมด", "ยอดฮิต", "ใหม่"];

const Products = () => {
  const [active, setActive] = useState("ทั้งหมด");

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">สินค้าทั้งหมด</h2>
          <div className="flex gap-2 ml-auto sm:ml-4">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                  active === t ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <article key={p.id} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1">
              <div className="relative aspect-square bg-muted/40 overflow-hidden">
                {p.badge && (
                  <span className="absolute top-3 left-3 z-10 gradient-red text-primary-foreground text-xs font-bold px-3 py-1 rounded-md shadow-red">
                    {p.badge}
                  </span>
                )}
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-contain p-6 group-hover:scale-105 transition-smooth" />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-medium text-foreground line-clamp-2 min-h-[2.5rem] mb-3">{p.name}</h3>
                <div className="flex items-end justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">฿ {p.price}</span>
                    {p.original && <span className="text-sm text-muted-foreground line-through">฿ {p.original}</span>}
                  </div>
                  <button aria-label="Add to cart" className="h-9 w-9 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-smooth">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
