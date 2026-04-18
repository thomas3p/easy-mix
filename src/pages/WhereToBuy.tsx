import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import WhereToBuy from "@/components/easymix/WhereToBuy";

const WhereToBuyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              ช่องทางการซื้อ
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">หาซื้อ Easy Mix ได้ที่ไหน?</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              เลือกช่องทางที่สะดวกสำหรับคุณ ทั้งออนไลน์และร้านค้าปลีกทั่วประเทศ
            </p>
          </div>
        </section>

        <WhereToBuy title="เลือกช่องทางที่คุณสะดวก" subtitle="คลิกเพื่อไปยังร้านค้าที่ต้องการ" />

        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">สนใจเป็นตัวแทนจำหน่าย?</h2>
            <p className="text-muted-foreground mb-6">
              ติดต่อทีมขายของเราเพื่อรับเงื่อนไขและส่วนลดพิเศษสำหรับร้านค้าและธุรกิจ
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 gradient-red text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-red hover:scale-105 transition-smooth"
            >
              ติดต่อทีมขาย
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhereToBuyPage;
