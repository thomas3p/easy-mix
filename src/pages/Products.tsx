import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import Products from "@/components/easymix/Products";

const ProductsPage = () => {
  useSEO({ title: "สินค้าทั้งหมด", description: "เลือกซื้อซอส Easy Mix ขนาดและแพ็คที่เหมาะกับครัวของคุณ" });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center px-4">
            <span className="label-chip label-chip-red mb-4 inline-block">สินค้า</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">สินค้าทั้งหมดของเรา</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              เลือกขนาดและแพ็คที่เหมาะกับครัวของคุณ
            </p>
          </div>
        </section>
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
