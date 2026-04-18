import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-thai-food.jpg";

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="relative h-[78vh] min-h-[520px] max-h-[760px] w-full">
      <img src={heroImg} alt="อาหารไทยรสชาติเข้มข้นจาก Easy Mix" className="absolute inset-0 h-full w-full object-cover" width={1600} height={900} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

      <div className="container mx-auto relative h-full flex items-center">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            ✨ ซอสปรุงรสคู่ครัวคนรุ่นใหม่
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 text-foreground">
            ทุกจานอร่อย<br />
            <span className="text-primary">เริ่มต้นง่าย</span><br />
            กว่าที่คิด
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            ไม่ว่าจะมื้อเร่งรีบหรือมื้อพิเศษ Easy Mix ช่วยเติมเต็มทุกจานให้กลายเป็นช่วงเวลาดีๆ
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/where-to-buy" className="inline-flex items-center gap-2 gradient-red text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-red hover:scale-105 transition-smooth">
              ดูช่องทางการซื้อ <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/recipes" className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-semibold hover:bg-foreground/90 transition-smooth">
              ดูสูตรอาหาร
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
