import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import Products from "@/components/easymix/Products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              สินค้า
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">สินค้าทั้งหมดของเรา</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              เลือกขนาดและแพ็คที่เหมาะกับครัวของคุณ พร้อมรายละเอียด จุดเด่น และวิธีใช้
            </p>
          </div>
        </section>
        <Products />

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-extrabold mb-8 text-center">รีวิวจากลูกค้า</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "คุณแนน", text: "ใช้ทำผัดกะเพราอร่อยมาก กลมกล่อมไม่ต้องปรุงเพิ่ม", rate: 5 },
                { name: "คุณโอ๊ต", text: "หมักหมูทอดด้วยแล้วเด็กๆ ชอบมาก ติดใจกันทั้งบ้าน", rate: 5 },
                { name: "คุณมุก", text: "ขวดเดียวจบ ประหยัดเวลาตอนเช้าได้เยอะเลย", rate: 4 },
              ].map((r) => (
                <div key={r.name} className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="text-primary mb-2">{"★".repeat(r.rate)}{"☆".repeat(5 - r.rate)}</div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{r.text}"</p>
                  <div className="font-semibold">— {r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
