import { useState } from "react";
import { ShoppingCart, Trash2, Tag } from "lucide-react";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import single from "@/assets/product-single.jpg";
import double from "@/assets/product-double.jpg";

const initialCart = [
  { id: 1, name: "ซอสปรุงรส Easy Mix 600 มล.", price: 65, qty: 2, img: single },
  { id: 2, name: "ซอส Easy Mix 600 มล. แพ็คคู่", price: 119, qty: 1, img: double },
];

const promos = [
  { code: "EASY10", desc: "ลด 10% ทุกคำสั่งซื้อขั้นต่ำ 200 บาท" },
  { code: "FREESHIP", desc: "ส่งฟรีเมื่อซื้อครบ 500 บาท" },
];

const Shop = () => {
  const [cart, setCart] = useState(initialCart);

  const update = (id: number, delta: number) =>
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c)));
  const remove = (id: number) => setCart(cart.filter((c) => c.id !== id));

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const shipping = subtotal >= 500 ? 0 : 40;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              ร้านค้า
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">ตะกร้าสินค้า</h1>
            <p className="text-muted-foreground text-lg">รองรับการสั่งซื้อโดยตรง พร้อมโปรโมชันสุดคุ้ม</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.length === 0 && (
                <div className="bg-card p-10 rounded-2xl text-center text-muted-foreground">ตะกร้าว่างเปล่า</div>
              )}
              {cart.map((c) => (
                <div key={c.id} className="bg-card rounded-2xl shadow-soft p-4 flex gap-4 items-center">
                  <img src={c.img} alt={c.name} className="h-24 w-24 object-contain bg-muted/40 rounded-xl p-2" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{c.name}</h3>
                    <div className="text-primary font-bold">฿ {c.price}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => update(c.id, -1)} className="h-8 w-8 rounded-full bg-muted hover:bg-muted/70">−</button>
                    <span className="w-8 text-center font-semibold">{c.qty}</span>
                    <button onClick={() => update(c.id, 1)} className="h-8 w-8 rounded-full bg-muted hover:bg-muted/70">+</button>
                  </div>
                  <button onClick={() => remove(c.id)} aria-label="Remove" className="p-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}

              <div className="bg-card rounded-2xl p-6 shadow-soft mt-6">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Tag className="h-4 w-4 text-primary" /> โปรโมชันที่ใช้ได้</h3>
                <ul className="space-y-2 text-sm">
                  {promos.map((p) => (
                    <li key={p.code} className="flex items-center justify-between bg-muted/40 p-3 rounded-lg">
                      <span><span className="font-bold text-primary">{p.code}</span> — {p.desc}</span>
                      <button className="text-xs font-semibold text-primary hover:underline">ใช้</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="bg-card rounded-2xl p-6 shadow-soft h-fit sticky top-24">
              <h3 className="font-bold text-xl mb-5">สรุปคำสั่งซื้อ</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">ยอดรวม</span><span>฿ {subtotal}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">ค่าจัดส่ง</span><span>{shipping === 0 ? "ฟรี" : `฿ ${shipping}`}</span></div>
                <div className="border-t border-border pt-3 flex justify-between text-lg font-bold">
                  <span>รวมทั้งหมด</span><span className="text-primary">฿ {subtotal + shipping}</span>
                </div>
              </div>
              <button className="mt-6 w-full gradient-red text-primary-foreground font-semibold py-3.5 rounded-full hover:opacity-90 transition-smooth flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" /> ดำเนินการชำระเงิน
              </button>
              <p className="text-xs text-muted-foreground text-center mt-3">รองรับ บัตรเครดิต / PromptPay / COD</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
