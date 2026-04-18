import { Link } from "react-router-dom";
import { recipes } from "@/data/recipes";

const Recipes = () => (
  <section id="recipes" className="py-14 md:py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 md:mb-14">
        <span className="label-chip label-chip-red mb-3 inline-block">สูตรอาหาร</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-3">สูตรอาหาร</h2>
        <p className="text-base md:text-lg text-foreground/80">อร่อยง่าย ในทุกมื้อของคุณ</p>
      </div>

      {/* Mobile: 1 col | md: 3 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {recipes.map((r) => (
          <article key={r.slug} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group">
            <Link to={`/recipes/${r.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={r.img} alt={r.title} loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <span className="absolute top-3 left-3 label-chip label-chip-red">{r.category}</span>
              </div>
            </Link>
            <div className="p-4 md:p-6">
              <div className="flex gap-3 text-xs text-muted-foreground mb-2">
                <span>⏱ {r.time}</span>
                <span>📊 {r.difficulty}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{r.desc}</p>
              <Link
                to={`/recipes/${r.slug}`}
                className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
              >
                ดูสูตร →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Recipes;
