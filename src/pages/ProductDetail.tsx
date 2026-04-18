import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, Truck, ShieldCheck, Clock } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import { getProduct, products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"desc" | "usage" | "nutrition">("desc");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-24 text-center">
          <h1 className="text-3xl font-extrabold mb-4">ไม่พบสินค้านี้</h1>
          <Link to="/products" className="text-primary font-semibold hover:underline">
            &lt; กลับไปหน้าสินค้า
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const addToCart = () => {
    toast.success(`เพิ่ม ${product.shortName} จำนวน ${qty} ลงในตะกร้าแล้ว`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-8 border-b border-border bg-muted/20">
          <div className="container mx-auto">
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
              <ArrowLeft className="h-4 w-4" /> กลับไปหน้าสินค้า
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12">
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12 flex items-center justify-center relative">
              {product.badge && (
                <span className="absolute top-6 left-6 gradient-red text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-md shadow-red">
                  {product.badge}
                </span>
              )}
              <img src={product.img} alt={product.name} className="max-h-[480px] w-auto object-contain" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {product.tag}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{product.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                <span className="text-primary">★★★★★</span>
                <span>4.8 (128 รีวิว)</span>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">{product.description}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-extrabold text-primary">฿{product.price}</span>
                {product.original && (
                  <span className="text-lg text-muted-foreground line-through">฿{product.original}</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-card rounded-xl p-3 border border-border">
                  <div className="text-xs text-muted-foreground">ขนาด</div>
                  <div className="font-bold">{product.size}</div>
                </div>
                <div className="bg-card rounded-xl p-3 border border-border">
                  <div className="text-xs text-muted-foreground">แพ็ค</div>
                  <div className="font-bold">{product.pack}</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3">จุดเด่น</h3>
                <ul className="space-y-2">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex gap-2 items-start text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground/90">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center border border-border rounded-full overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="h-11 w-11 flex items-center justify-center hover:bg-muted transition-smooth"
                    aria-label="ลดจำนวน"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-bold">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="h-11 w-11 flex items-center justify-center hover:bg-muted transition-smooth"
                    aria-label="เพิ่มจำนวน"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={addToCart}
                  className="flex-1 h-11 gradient-red text-primary-foreground font-bold rounded-full inline-flex items-center justify-center gap-2 shadow-red hover:opacity-90 transition-smooth"
                >
                  <ShoppingCart className="h-5 w-5" /> เพิ่มลงตะกร้า
                </button>
              </div>

              <Link
                to="/shop"
                className="block w-full h-11 border-2 border-foreground text-foreground font-bold rounded-full inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-smooth"
              >
                ซื้อเลย
              </Link>

              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-border text-center text-xs">
                <div>
                  <Truck className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <span className="text-muted-foreground">ส่งฟรีเมื่อสั่ง ฿500</span>
                </div>
                <div>
                  <ShieldCheck className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <span className="text-muted-foreground">รับประกันคุณภาพ</span>
                </div>
                <div>
                  <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <span className="text-muted-foreground">ส่งใน 1-3 วัน</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <div className="flex gap-2 mb-6 border-b border-border">
              {[
                { id: "desc", label: "รายละเอียด" },
                { id: "usage", label: "วิธีใช้" },
                { id: "nutrition", label: "โภชนาการ" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as typeof tab)}
                  className={`px-5 py-3 text-sm font-bold border-b-2 transition-smooth ${
                    tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tab === "desc" && (
              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">{product.description}</p>
                <div>
                  <h4 className="font-bold mb-2">ส่วนประกอบ</h4>
                  <p className="text-sm text-muted-foreground">{product.ingredients}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">การเก็บรักษา</h4>
                  <p className="text-sm text-muted-foreground">{product.storage}</p>
                </div>
              </div>
            )}

            {tab === "usage" && (
              <ul className="space-y-3">
                {product.usage.map((u, i) => (
                  <li key={i} className="flex gap-3 bg-card p-4 rounded-xl">
                    <span className="h-8 w-8 rounded-full gradient-red text-primary-foreground font-bold flex items-center justify-center shrink-0 text-sm">
                      {i + 1}
                    </span>
                    <span className="text-foreground/90 pt-1">{u}</span>
                  </li>
                ))}
              </ul>
            )}

            {tab === "nutrition" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {product.nutrition.map((n) => (
                  <div key={n.label} className="bg-card rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{n.label}</div>
                    <div className="font-extrabold text-primary">{n.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">สินค้าอื่นที่น่าสนใจ</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1"
                >
                  <div className="relative aspect-square bg-muted/40 overflow-hidden">
                    {p.badge && (
                      <span className="absolute top-3 left-3 z-10 gradient-red text-primary-foreground text-xs font-bold px-3 py-1 rounded-md shadow-red">
                        {p.badge}
                      </span>
                    )}
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-contain p-6 group-hover:scale-105 transition-smooth" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem] mb-2">{p.name}</h3>
                    <span className="text-lg font-bold text-primary">฿{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
