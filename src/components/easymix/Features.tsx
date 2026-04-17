import { ChefHat, Clock, Flame, Sparkles } from "lucide-react";

const features = [
  { icon: ChefHat, title: "ทำง่าย", desc: "ใช้แทนเครื่องปรุงหลายอย่าง จบในขวดเดียว" },
  { icon: Clock, title: "ประหยัดเวลา", desc: "ลดเวลาทำอาหารลงครึ่งหนึ่ง อร่อยทุกครั้ง" },
  { icon: Flame, title: "รสชาติเข้มข้น", desc: "สูตรเฉพาะ กลมกล่อม หอมเครื่องปรุงไทยแท้" },
  { icon: Sparkles, title: "วัตถุดิบคัดสรร", desc: "คุณภาพมาตรฐานส่งออก ปลอดภัยมั่นใจได้" },
];

const Features = () => (
  <section className="py-20 bg-muted/40">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          ทำไมต้อง <span className="text-primary">Easy Mix</span>
        </h2>
        <p className="text-muted-foreground text-lg">เคล็ดลับครัวบ้านที่เปลี่ยนทุกมื้อให้พิเศษ</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <div key={f.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:gradient-red group-hover:text-primary-foreground transition-smooth">
              <f.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-smooth" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
