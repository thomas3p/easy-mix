import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import { useRecipe, useRecipes } from "@/hooks/useRecipes";
import { useSEO } from "@/hooks/useSEO";
import { DetailLoader } from "@/components/easymix/LoadingState";

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: recipe, isLoading, isError } = useRecipe(slug ?? "");
  const { data: all = [] } = useRecipes();

  useSEO({ title: recipe?.title ?? "สูตรอาหาร", description: recipe?.description ?? "" });

  if (isLoading) return <div className="min-h-screen bg-background"><Header /><main><DetailLoader /></main><Footer /></div>;

  if (isError || !recipe) return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold mb-4">ไม่พบสูตรอาหารนี้</h1>
        <Link to="/recipes" className="text-primary font-semibold hover:underline">← กลับไปหน้าสูตรอาหาร</Link>
      </main>
      <Footer />
    </div>
  );

  const related = all.filter((r) => r.slug !== recipe.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-10 border-b border-border">
          <div className="container mx-auto px-4">
            <Link to="/recipes" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-4">
              <ArrowLeft className="h-4 w-4" /> กลับไปหน้าสูตรอาหาร
            </Link>
            <span className="label-chip label-chip-red mb-3 inline-block">{recipe.category}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3">{recipe.title}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">{recipe.description}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-6 md:gap-10">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-card aspect-[4/3] md:aspect-auto">
              {recipe.imgUrl
                ? <img src={recipe.imgUrl} alt={recipe.title} className="w-full h-full object-cover" />
                : <div className="w-full h-64 bg-muted" />
              }
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Clock, label: "เวลา", value: recipe.time },
                  { icon: Users, label: "เสิร์ฟ", value: recipe.serves },
                  { icon: ChefHat, label: "ระดับ", value: recipe.difficulty },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-card p-5 rounded-2xl shadow-soft text-center">
                    <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="font-bold">{value}</div>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-extrabold mb-4">วัตถุดิบ</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ing) => (
                    <li key={ing} className="flex gap-3 items-start">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-foreground/90">{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-extrabold mb-8 text-center">วิธีทำ</h2>
            <ol className="space-y-4">
              {recipe.steps.map((s, i) => (
                <li key={i} className="flex gap-4 bg-card p-5 rounded-2xl shadow-soft">
                  <span className="h-10 w-10 rounded-full gradient-red text-white font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <p className="text-foreground/90 leading-relaxed pt-1.5">{s}</p>
                </li>
              ))}
            </ol>
            {recipe.tips.length > 0 && (
              <div className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-extrabold text-lg mb-3 text-primary">เคล็ดลับ</h3>
                <ul className="space-y-2">
                  {recipe.tips.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-primary">★</span>
                      <span className="text-foreground/90">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-extrabold mb-6">สูตรอื่นที่น่าสนใจ</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} to={`/recipes/${r.slug}`}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group flex">
                    <div className="w-40 shrink-0 overflow-hidden">
                      {r.imgUrl
                        ? <img src={r.imgUrl} alt={r.title} className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                        : <div className="h-full w-full bg-muted" />
                      }
                    </div>
                    <div className="p-5 flex-1">
                      <span className="text-xs text-primary font-semibold">{r.category}</span>
                      <h3 className="font-bold mt-1 mb-2 line-clamp-2">{r.title}</h3>
                      <span className="text-sm text-primary font-semibold">ดูสูตร →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RecipeDetail;
