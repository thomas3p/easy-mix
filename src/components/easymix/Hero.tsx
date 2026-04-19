import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import heroKrapao from "@/assets/hero-krapao.jpg";
import heroCurry from "@/assets/hero-curry.jpg";
import heroFriedRice from "@/assets/hero-friedrice.jpg";
import heroThai from "@/assets/hero-thai-food.jpg";
import A from "@/assets/A.jpg";
import B from "@/assets/B.jpg";
import C from "@/assets/C.jpg";
import D from "@/assets/D.jpg";
import E from "@/assets/E.jpg";
import F from "@/assets/F.jpg";


const slides = [
  { src: A, alt: "อาหารจานผัดรสชาติเข้มข้นจาก Easy Mix" },
  { src: B, alt: "อาหารจานแกงรสชาติเข้มข้นจาก Easy Mix" },
  { src: C, alt: "อาหารจานผัดรสชาติเข้มข้นจาก Easy Mix" },
  { src: D, alt: "อาหารจานแกงรสชาติเข้มข้นจาก Easy Mix" },
  { src: E, alt: "อาหารจานผัดรสชาติเข้มข้นจาก Easy Mix" },
  { src: F, alt: "อาหารจานแกงรสชาติเข้มข้นจาก Easy Mix" },
];

const Hero = () => {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[78vh] min-h-[520px] max-h-[760px] w-full">
        <Carousel
          opts={{ loop: true }}
          plugins={[autoplay.current]}
          className="absolute inset-0 h-full w-full"
        >
          <CarouselContent className="ml-0 h-[78vh] min-h-[520px] max-h-[760px]">
            {slides.map((slide, i) => (
              <CarouselItem key={i} className="pl-0 relative h-[78vh] min-h-[520px] max-h-[760px]">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-cover animate-fade-in"
                  width={1600}
                  height={900}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />

        <div className="container mx-auto relative h-full flex items-center pointer-events-none">
          <div className="max-w-2xl animate-fade-up pointer-events-auto">
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
};

export default Hero;
