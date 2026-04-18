import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import { recipes } from "@/data/recipes";

const ALL = "ทั้งหมด";
const categories = [ALL, ...Array.from(new Set(recipes.map((r) => r.category)))];

const RecipesPage = () => {
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL
    ? recipes
    : recipes.filter((r) => r.category === active);

  useSEO({ title: "สูตรอาหาร", description: "สูตรอาหารง่ายจาก Easy Mix ทำเองได้ที่บ้าน อร่อยเหมือนร้านดัง" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="label-chip label-chip-red mb-4 inline-block">สูตรอาหาร</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              สูตรอาหารจาก Easy Mix
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              รวมไอเดียเมนูง่ายๆ ทำเองได้ที่บ้าน อร่อยเหมือนร้านดัง
            </p>

            {/* Category filter — functional */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                    active === c
                      ? "bg-foreground text-background"
                      : "bg-card text-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Recipe grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20">
                ยังไม่มีสูตรในหมวดนี้
              </p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {filtered.map((r) => (
                  <article
                    key={r.slug}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group"
                  >
                    <Link to={`/recipes/${r.slug}`} className="block">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={r.img}
                          alt={r.title}
                          loading="lazy"
                          className="h-full w-full object-cover group-hover:scale-105 transition-smooth"
                        />
                        <span className="absolute top-3 left-3 label-chip label-chip-red">
                          {r.category}
                        </span>
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex gap-3 text-xs text-muted-foreground mb-3">
                        <span>⏱ {r.time}</span>
                        <span>👤 {r.serves}</span>
                        <span>📊 {r.difficulty}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{r.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {r.desc}
                      </p>
                      <Link
                        to={`/recipes/${r.slug}`}
                        className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                      >
                        ดูสูตรอาหาร →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RecipesPage;
