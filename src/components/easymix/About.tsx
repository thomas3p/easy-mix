import { ShieldCheck, Award, Leaf } from "lucide-react";

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5">
          เกี่ยวกับแบรนด์
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          ครัวง่ายๆ <span className="text-primary">ที่อร่อยได้เหมือนมืออาชีพ</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Easy Mix คือซอสปรุงรสที่เกิดจากความตั้งใจของเราที่จะทำให้ทุกมื้ออาหารง่ายและอร่อยขึ้น
          ด้วยสูตรเฉพาะที่ผ่านการคิดค้นจากเชฟมืออาชีพ ผสานวัตถุดิบไทยคัดสรรอย่างพิถีพิถัน
        </p>
        <ul className="space-y-3 mb-8">
          {[
            { icon: ShieldCheck, text: "ผลิตในโรงงานมาตรฐาน GMP / HACCP" },
            { icon: Award, text: "ได้รับการรับรองคุณภาพระดับสากล" },
            { icon: Leaf, text: "ไม่ใส่สีสังเคราะห์ ไม่ใส่ผงชูรส" },
          ].map((it) => (
            <li key={it.text} className="flex items-start gap-3">
              <span className="mt-0.5 h-7 w-7 rounded-full gradient-red flex items-center justify-center shrink-0">
                <it.icon className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="text-foreground">{it.text}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-semibold hover:bg-foreground/90 transition-smooth">
          เรียนรู้เพิ่มเติม
        </a>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-red flex items-center justify-center text-primary-foreground">
              <div className="text-center">
                <div className="text-5xl font-extrabold">15+</div>
                <div className="text-sm mt-1 opacity-90">ปีของประสบการณ์</div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-foreground text-background flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-extrabold">100%</div>
                <div className="text-sm mt-1 opacity-80">ปลอดภัย</div>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-10">
            <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary">1M+</div>
                <div className="text-sm mt-1 text-muted-foreground">ขวดที่ส่งมอบ</div>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-2xl border-2 border-foreground flex items-center justify-center">
              <div className="text-center px-4">
                <div className="text-3xl font-extrabold">⭐ 4.9</div>
                <div className="text-sm mt-1 text-muted-foreground">รีวิวจากลูกค้า</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
