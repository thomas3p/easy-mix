import { Link } from "react-router-dom";
import { recipes } from "@/data/recipes";

const Recipes = () => (
  <section id="recipes" className="py-20 bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">สูตรอาหาร</h2>
        <p className="text-lg text-foreground/80">อร่อยง่าย ในทุกมื้อของคุณ</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <article key={r.slug} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group">
            <Link to={`/recipes/${r.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.title} loading="lazy" width={900} height={700} className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <span className="absolute bottom-4 right-4 text-2xl font-extrabold text-background drop-shadow-lg italic">
                  สไตล์อีซี่มิกซ์
                </span>
              </div>
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{r.desc}</p>
              <Link to={`/recipes/${r.slug}`} className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
                อ่านเพิ่มเติม &gt;&gt;&gt;&gt;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Recipes;
