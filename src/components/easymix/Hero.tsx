import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-thai-food.jpg";

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    {/* ── Mobile: full-height stack | Desktop: wide landscape ── */}
    <div className="relative min-h-[100svh] md:h-[78vh] md:min-h-[520px] md:max-h-[760px] w-full">
      <img
        src={heroImg}
        alt="อาหารไทยรสชาติเข้มข้นจาก Easy Mix"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={1600} height={900}
      />
      {/* Overlay — mobile เข้มกว่าเพื่อให้อ่านข้อความได้ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 md:bg-none" />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-background/40 to-transparent" />

      <div className="container mx-auto relative h-full flex items-center px-4">
        {/* Content — bottom-aligned on mobile, center on desktop */}
        <div className="w-full pt-24 pb-12 md:pt-0 md:pb-0 md:max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 md:bg-primary/10 text-white md:text-primary text-xs md:text-sm font-semibold mb-4 md:mb-6 backdrop-blur-sm md:backdrop-blur-none">
            ✨ ซอสปรุงรสคู่ครัวคนรุ่นใหม่
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-6 text-white md:text-foreground">
            ทุกจานอร่อย<br />
            <span className="text-primary">เริ่มต้นง่าย</span><br />
            กว่าที่คิด
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-white/80 md:text-muted-foreground mb-7 md:mb-8 max-w-sm md:max-w-lg leading-relaxed">
            ไม่ว่าจะมื้อเร่งรีบหรือมื้อพิเศษ Easy Mix ช่วยเติมเต็มทุกจานให้กลายเป็นช่วงเวลาดีๆ
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/where-to-buy"
              className="inline-flex items-center justify-center gap-2 gradient-red text-white px-7 py-3.5 rounded-full font-bold shadow-red cta-scale text-sm md:text-base"
            >
              ดูช่องทางการซื้อ <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/recipes"
              className="inline-flex items-center justify-center gap-2 bg-white/15 md:bg-foreground text-white md:text-background px-7 py-3.5 rounded-full font-bold hover:bg-white/25 md:hover:bg-foreground/90 transition-smooth text-sm md:text-base backdrop-blur-sm md:backdrop-blur-none"
            >
              ดูสูตรอาหาร
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
