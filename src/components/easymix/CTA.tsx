import { Link } from "react-router-dom";

const CTA = () => (
  <section className="py-14 md:py-20 px-4">
    <div className="container mx-auto">
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-foreground text-background p-8 md:p-16">
        <div className="absolute -top-16 -right-16 h-48 w-48 md:h-64 md:w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 md:h-64 md:w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 leading-tight">
              พร้อมเริ่มมื้อ<br />
              อร่อยแบบ <span className="text-primary">Easy</span> หรือยัง?
            </h2>
            <p className="text-background/70 text-sm md:text-lg">
              หา Easy Mix ได้ที่ Shopee, Lazada, LINE, Lotus's, 7-Eleven และอีกมากมาย
            </p>
          </div>

          {/* Mobile: stack | Desktop: row end-align */}
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <Link
              to="/where-to-buy"
              className="gradient-red text-white px-7 py-3.5 rounded-full font-bold shadow-red text-sm md:text-base text-center cta-scale"
            >
              ดูช่องทางการซื้อ
            </Link>
            <Link
              to="/contact"
              className="border-2 border-background/40 text-background px-7 py-3.5 rounded-full font-bold hover:bg-background hover:text-foreground transition-smooth text-sm md:text-base text-center"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
