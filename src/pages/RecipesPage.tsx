import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";
import Recipes from "@/components/easymix/Recipes";

const categories = ["ทั้งหมด", "เมนูง่าย", "เมนูประหยัด", "เมนูสุขภาพ", "เมนูเด็ก"];

const steps = [
  "เตรียมวัตถุดิบให้พร้อม ล้างทำความสะอาด หั่นเป็นชิ้นพอดีคำ",
  "ตั้งกระทะให้ร้อน ใส่น้ำมันเล็กน้อย ผัดเครื่องหอมให้หอม",
  "ใส่เนื้อสัตว์ลงผัดจนสุก ตามด้วยผัก",
  "ปรุงรสด้วยซอส Easy Mix 2 ช้อนโต๊ะ ผัดให้เข้ากัน",
  "ตักเสิร์ฟพร้อมข้าวสวยร้อนๆ พร้อมรับประทาน",
];

const RecipesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              สูตรอาหาร
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">สูตรอาหารจาก Easy Mix</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              รวมไอเดียเมนูง่ายๆ ทำเองได้ที่บ้าน อร่อยเหมือนร้านดัง
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map((c, i) => (
                <button
                  key={c}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                    i === 0 ? "bg-foreground text-background" : "bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        <Recipes />

        <section className="py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold mb-8 text-center">วิธีทำแบบเป็นขั้นตอน</h2>
            <ol className="space-y-5">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-4 bg-card p-5 rounded-2xl shadow-soft">
                  <span className="h-10 w-10 rounded-full gradient-red text-primary-foreground font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-foreground/90 leading-relaxed pt-1.5">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RecipesPage;
