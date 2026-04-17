import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import friedrice from "@/assets/recipe-friedrice.jpg";
import krapao from "@/assets/recipe-krapao.jpg";
import mootod from "@/assets/recipe-mootod.jpg";

const posts = [
  { title: "5 เคล็ดลับทำอาหารไทยให้อร่อยเหมือนร้านดัง", date: "12 มี.ค. 2025", cat: "ทำอาหาร", img: friedrice, excerpt: "เคล็ดลับเล็กๆ น้อยๆ ที่จะเปลี่ยนเมนูธรรมดาให้อร่อยขึ้น..." },
  { title: "ไอเดียเมนูสำหรับคนรีบเร่ง ทำใน 15 นาที", date: "5 มี.ค. 2025", cat: "ไอเดียเมนู", img: krapao, excerpt: "รวมเมนูง่ายๆ ที่ทำเสร็จไว เหมาะกับชีวิตเร่งรีบ..." },
  { title: "Lifestyle: กินดีอยู่ดีในสไตล์คนเมือง", date: "1 มี.ค. 2025", cat: "ไลฟ์สไตล์", img: mootod, excerpt: "เลือกอาหารและจัดการเวลาให้สมดุลกับชีวิตประจำวัน..." },
  { title: "วิธีเลือกซอสปรุงรสให้เหมาะกับเมนู", date: "20 ก.พ. 2025", cat: "ทำอาหาร", img: friedrice, excerpt: "เข้าใจซอสแต่ละชนิด ใช้ให้ถูกเมนูแล้วอร่อยขึ้นเป็นเท่าตัว..." },
  { title: "อาหารคลีนแบบไทยๆ ใครว่าน่าเบื่อ", date: "10 ก.พ. 2025", cat: "ไลฟ์สไตล์", img: krapao, excerpt: "เปลี่ยนเมนูคลีนให้สนุกและอร่อยด้วยเครื่องปรุงไทย..." },
  { title: "เมนูสำหรับมือใหม่หัดทำกับข้าว", date: "1 ก.พ. 2025", cat: "ไอเดียเมนู", img: mootod, excerpt: "เริ่มต้นง่ายๆ กับเมนูพื้นฐานที่ใครก็ทำได้..." },
];

const Blog = () => {
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
                <article key={p.title} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{p.cat}</span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.excerpt}</p>
                    <a href="#" className="text-primary font-semibold text-sm hover:underline">อ่านต่อ &gt;</a>
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
