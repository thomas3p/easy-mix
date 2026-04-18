import { Phone, Mail, MessageCircle, Facebook, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("ส่งข้อความเรียบร้อย เราจะติดต่อกลับโดยเร็วที่สุด");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">ติดต่อเรา</h1>
            <p className="text-muted-foreground text-lg">เรายินดีรับฟังและตอบทุกข้อความของคุณ</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-extrabold mb-6">ช่องทางการติดต่อ</h2>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Phone, label: "โทรศัพท์", val: "02-123-4567" },
                  { icon: MessageCircle, label: "LINE", val: "@easymix" },
                  { icon: Facebook, label: "Facebook", val: "EasyMix Official" },
                  { icon: Mail, label: "Email", val: "hello@easymix.co" },
                  { icon: MapPin, label: "ที่อยู่", val: "99, 99/1, 99/2 ฟ้าฮ่าม เมืองเชียงใหม่ เชียงใหม่ 50000" },
                ].map((c) => (
                  <li key={c.label} className="flex gap-4 bg-card p-4 rounded-2xl shadow-soft">
                    <span className="h-11 w-11 rounded-full gradient-red flex items-center justify-center shrink-0">
                      <c.icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <div>
                      <div className="text-sm text-muted-foreground">{c.label}</div>
                      <div className="font-semibold">{c.val}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-soft">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=ChiangMai&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <form onSubmit={submit} className="bg-card p-8 rounded-2xl shadow-soft h-fit">
              <h2 className="text-2xl font-extrabold mb-6">แบบฟอร์มติดต่อ</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">ชื่อ</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">อีเมล</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">หัวข้อ</label>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">ข้อความ</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <button type="submit" className="w-full gradient-red text-primary-foreground font-semibold py-3.5 rounded-full hover:opacity-90 transition-smooth">
                  ส่งข้อความ
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
