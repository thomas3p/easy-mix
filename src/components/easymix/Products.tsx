import { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { CardLoader, ErrorState } from "@/components/easymix/LoadingState";

const tabs = ["ทั้งหมด", "ยอดฮิต", "ใหม่"] as const;

const Products = () => {
  const [active, setActive] = useState<(typeof tabs)[number]>("ทั้งหมด");
  const tag = active === "ทั้งหมด" ? undefined : active;
  const { data: products = [], isLoading, isError } = useProducts(tag);

  return (
    <section id="products" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold">สินค้าทั้งหมด</h2>
          <div className="flex gap-2 sm:ml-auto">
            {tabs.map((t) => (
              <button key={t} onClick={() => setActive(t)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-smooth ${
                  active === t ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >{t}</button>
            ))}
          </div>
        </div>

        {isLoading ? <CardLoader cols={4} /> : isError ? <ErrorState /> : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {products.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1 block">
                <div className="relative aspect-square bg-muted/40 overflow-hidden">
                  {p.badge && (
                    <span className="absolute top-2 left-2 md:top-3 md:left-3 z-10 gradient-red text-white text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-md shadow-red-sm">
                      {p.badge}
                    </span>
                  )}
                  {p.imgUrl
                    ? <img src={p.imgUrl} alt={p.name} loading="lazy"
                        className="h-full w-full object-contain p-4 md:p-6 group-hover:scale-105 transition-smooth" />
                    : <div className="h-full w-full flex items-center justify-center text-muted-foreground/30">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                        </svg>
                      </div>
                  }
                </div>
                <div className="p-3 md:p-5">
                  <h3 className="text-xs md:text-sm font-medium line-clamp-2 min-h-[2.5rem] mb-2 group-hover:text-primary transition-smooth">
                    {p.name}
                  </h3>
                  <div className="flex items-end justify-between">
                    <div className="flex items-baseline gap-1 md:gap-2">
                      <span className="text-base md:text-xl font-bold text-primary">฿{p.price}</span>
                      {p.original && <span className="text-xs text-muted-foreground line-through">฿{p.original}</span>}
                    </div>
                    <span className="text-xs text-primary font-semibold hidden sm:block">ดูรายละเอียด →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
