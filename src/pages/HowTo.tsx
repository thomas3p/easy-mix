import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { ChevronDown } from "lucide-react";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";

const tips = [
  { title: "วิธีใช้ Easy Mix สำหรับผัด", text: "ใช้อัตราส่วน 2 ช้อนโต๊ะต่ออาหาร 1 จาน ใส่หลังจากผัดวัตถุดิบสุกแล้ว" },
  { title: "วิธีหมักเนื้อสัตว์", text: "ใช้ 3 ช้อนโต๊ะต่อเนื้อ 500 กรัม หมักทิ้งไว้ 30 นาทีในตู้เย็น" },
  { title: "วิธีทำน้ำจิ้ม", text: "ผสม Easy Mix กับมะนาว พริกซอย และน้ำตาลเล็กน้อย" },
];

const faqs = [
  { q: "เก็บรักษาอย่างไร?", a: "หลังเปิดควรเก็บในตู้เย็นและใช้ภายใน 3 เดือน" },
  { q: "มีผงชูรสไหม?", a: "ไม่มีผงชูรสและไม่ใส่สีสังเคราะห์" },
  { q: "ใช้ได้กี่จาน?", a: "ขวด 600 มล. ใช้ได้ประมาณ 60-80 จาน" },
  { q: "หาซื้อได้ที่ไหน?", a: "ซูเปอร์มาร์เก็ตชั้นนำทั่วประเทศ และทางเว็บไซต์ของเรา" },
];

const HowTo = () => {
  const [open, setOpen] = useState<number | null>(0);

  useSEO({ title: "วิธีใช้และเคล็ดลับ", description: "วิธีใช้ซอส Easy Mix และเคล็ดลับการทำอาหารให้อร่อยทุกเมนู" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              How to / Tips
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">วิธีใช้และเคล็ดลับ</h1>
            <p className="text-muted-foreground text-lg">เคล็ดลับการใช้ซอส Easy Mix ให้อร่อยทุกเมนู</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-extrabold mb-8 text-center">เทคนิคการปรุงอาหาร</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tips.map((t, i) => (
                <div key={t.title} className="bg-card p-6 rounded-2xl shadow-soft">
                  <div className="h-12 w-12 rounded-full gradient-red text-primary-foreground font-bold flex items-center justify-center mb-4">{i + 1}</div>
                  <h3 className="font-bold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold mb-8 text-center">คำถามที่พบบ่อย (FAQ)</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="bg-card rounded-2xl shadow-soft overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex justify-between items-center p-5 text-left font-semibold hover:bg-muted/30 transition-smooth"
                  >
                    {f.q}
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  {open === i && <div className="px-5 pb-5 text-muted-foreground">{f.a}</div>}
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

export default HowTo;
