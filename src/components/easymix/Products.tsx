import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { products } from "@/data/products";

const tabs = ["ทั้งหมด", "ยอดฮิต", "ใหม่"];

const Products = () => {
  const [active, setActive] = useState("ทั้งหมด");

  const filtered = active === "ทั้งหมด" ? products : products.filter((p) => p.tag === active);

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
          {filtered.map((p) => (
            <article key={p.slug} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1">
              <Link to={`/products/${p.slug}`} className="block relative aspect-square bg-muted/40 overflow-hidden">
                {p.badge && (
                  <span className="absolute top-3 left-3 z-10 gradient-red text-primary-foreground text-xs font-bold px-3 py-1 rounded-md shadow-red">
                    {p.badge}
                  </span>
                )}
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-contain p-6 group-hover:scale-105 transition-smooth" />
              </Link>
              <div className="p-5">
                <h3 className="text-sm font-medium text-foreground line-clamp-2 min-h-[2.5rem] mb-3">
                  <Link to={`/products/${p.slug}`} className="hover:text-primary transition-smooth">{p.name}</Link>
                </h3>
                <div className="flex items-end justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">฿ {p.price}</span>
                    {p.original && <span className="text-sm text-muted-foreground line-through">฿ {p.original}</span>}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toast.success(`เพิ่ม ${p.shortName} ลงในตะกร้าแล้ว`);
                    }}
                    aria-label="เพิ่มลงตะกร้า"
                    className="h-9 w-9 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-smooth"
                  >
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
