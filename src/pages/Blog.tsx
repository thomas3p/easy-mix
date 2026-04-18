import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import { posts } from "@/data/posts";

const Blog = () => {
  useSEO({ title: "บทความและไอเดีย", description: "บทความเรื่องอาหาร ไลฟ์สไตล์ และเคล็ดลับครัวจาก Easy Mix" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">บทความและไอเดีย</h1>
            <p className="text-muted-foreground text-lg">เรื่องราวอาหาร ไลฟ์สไตล์ และเคล็ดลับครัว</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <article key={p.slug} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group">
                  <Link to={`/blog/${p.slug}`} className="block aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{p.cat}</span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                      <Link to={`/blog/${p.slug}`} className="hover:text-primary transition-smooth">{p.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.excerpt}</p>
                    <Link to={`/blog/${p.slug}`} className="text-primary font-semibold text-sm hover:underline">อ่านต่อ &gt;</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
