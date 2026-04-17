const CTA = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-16">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              พร้อมเริ่มมื้อ<br />อร่อยแบบ <span className="text-primary">Easy</span> หรือยัง?
            </h2>
            <p className="text-background/70 text-lg">
              สั่งซื้อ Easy Mix วันนี้ รับส่วนลดพิเศษ 15% สำหรับลูกค้าใหม่
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a href="#shop" className="gradient-red text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-red hover:scale-105 transition-smooth">
              สั่งซื้อตอนนี้
            </a>
            <a href="#contact" className="border-2 border-background text-background px-8 py-4 rounded-full font-semibold hover:bg-background hover:text-foreground transition-smooth">
              ติดต่อเรา
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
