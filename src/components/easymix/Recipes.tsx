import friedrice from "@/assets/recipe-friedrice.jpg";
import krapao from "@/assets/recipe-krapao.jpg";
import mootod from "@/assets/recipe-mootod.jpg";

const recipes = [
  { title: "ข้าวผัดหอมกรุ่น", img: friedrice, desc: "ที่คลุกเคล้าด้วย \"อีซี่มิกซ์\" ให้รสชาติกลมกล่อมในทุกคำ พร้อมเสิร์ฟความอร่อยแบบเรียบง่ายที่คุ้นเคย" },
  { title: "ผัดกะเพราสะใจจ้าน", img: krapao, desc: "หอมใบกะเพราและเครื่องปรุงที่เข้ากันอย่างลงตัว \"อีซี่มิกซ์\" ช่วยให้ได้รสชาติเข้มข้น ครบทั้งเผ็ด เค็ม หอม ในจานเดียว" },
  { title: "หมูทอดสีทอง", img: mootod, desc: "ผ่านการหมักด้วย \"อีซี่มิกซ์\" จนเข้าเนื้อ ให้รสชาติกลมกล่อม หอมเครื่องปรุง เนื้อนุ่มฉ่ำในทุกคำ" },
];

const Recipes = () => (
  <section id="recipes" className="py-20 bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">สูตรอาหาร</h2>
        <p className="text-lg text-foreground/80">อร่อยง่าย ในทุกมื้อของคุณ</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <article key={r.title} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={r.img} alt={r.title} loading="lazy" width={900} height={700} className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <span className="absolute bottom-4 right-4 text-2xl font-extrabold text-background drop-shadow-lg italic">
                สไตล์อีซี่มิกซ์
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{r.desc}</p>
              <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
                อ่านเพิ่มเติม &gt;&gt;&gt;&gt;
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Recipes;
