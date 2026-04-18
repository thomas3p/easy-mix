import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import { getPost, posts } from "@/data/posts";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-24 text-center">
          <h1 className="text-3xl font-extrabold mb-4">ไม่พบบทความนี้</h1>
          <Link to="/blog" className="text-primary font-semibold hover:underline">
            &lt; กลับไปหน้าบทความ
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  useSEO({ title: post.title, description: post.excerpt });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article>
          <section className="bg-muted/30 py-12 border-b border-border">
            <div className="container mx-auto px-4 max-w-3xl">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-4">
                <ArrowLeft className="h-4 w-4" /> กลับไปบทความทั้งหมด
              </Link>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {post.cat}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-card mb-6 md:mb-10">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-5 text-foreground/90 leading-relaxed text-lg">
                {post.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </section>
        </article>

        {related.length > 0 && (
          <section className="py-16 bg-muted/30 border-t border-border">
            <div className="container mx-auto">
              <h2 className="text-2xl font-extrabold mb-6">บทความที่เกี่ยวข้อง</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-primary font-semibold">{p.cat}</span>
                      <h3 className="font-bold mt-1 line-clamp-2">{p.title}</h3>
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

export default BlogDetail;
