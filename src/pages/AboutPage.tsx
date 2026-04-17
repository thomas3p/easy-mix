import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import About from "@/components/easymix/About";

const milestones = [
  { year: "2010", text: "ก่อตั้งโรงงานผลิตซอสในจังหวัดสมุทรสาคร" },
  { year: "2015", text: "ได้รับมาตรฐาน GMP และ HACCP" },
  { year: "2019", text: "เปิดตัวซอส Easy Mix สูตรต้นตำรับ" },
  { year: "2023", text: "ส่งออกไปกว่า 10 ประเทศทั่วเอเชีย" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">เกี่ยวกับแบรนด์ Easy Mix</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              จากความตั้งใจเล็กๆ สู่ซอสปรุงรสในครัวคนไทยกว่าล้านครัวเรือน
            </p>
          </div>
        </section>

        <About />

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold mb-10 text-center">เส้นทางของเรา</h2>
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 bg-card p-6 rounded-2xl shadow-soft">
                  <div className="text-2xl font-extrabold text-primary w-20 shrink-0">{m.year}</div>
                  <p className="text-foreground/80 pt-1">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
