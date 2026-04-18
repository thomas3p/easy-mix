import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MessageCircle, Facebook, MapPin, Loader2 } from "lucide-react";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";

const schema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ (อย่างน้อย 2 ตัวอักษร)"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  subject: z.string().min(3, "กรุณากรอกหัวข้อ"),
  message: z.string().min(10, "กรุณากรอกข้อความ (อย่างน้อย 10 ตัวอักษร)"),
});

type FormData = z.infer<typeof schema>;

const contacts = [
  { icon: Phone,         label: "โทรศัพท์", val: "02-123-4567" },
  { icon: MessageCircle, label: "LINE",      val: "@easymix" },
  { icon: Facebook,      label: "Facebook",  val: "EasyMix Official" },
  { icon: Mail,          label: "Email",     val: "hello@easymix.co" },
  { icon: MapPin, label: "ที่อยู่", val: "99, 99/1, 99/2 ฟ้าฮ่าม เมืองเชียงใหม่ เชียงใหม่ 50000" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    setSubmitting(true);
    // TODO: เชื่อม API จริง เช่น EmailJS หรือ backend endpoint
    await new Promise((r) => setTimeout(r, 800)); // simulate network
    toast.success("ส่งข้อความเรียบร้อย เราจะติดต่อกลับโดยเร็วที่สุด");
    reset();
    setSubmitting(false);
  };

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-fast ${
      err ? "border-destructive focus:ring-destructive" : "border-border"
    }`;

  useSEO({ title: "ติดต่อเรา", description: "ติดต่อทีม Easy Mix ผ่านโทรศัพท์ LINE Facebook หรืออีเมล" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-muted/30 py-14 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="label-chip label-chip-red mb-4 inline-block">Contact</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">ติดต่อเรา</h1>
            <p className="text-muted-foreground text-lg">เรายินดีรับฟังและตอบทุกข้อความของคุณ</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-extrabold mb-6">ช่องทางการติดต่อ</h2>
              <ul className="space-y-4 mb-8">
                {contacts.map((c) => (
                  <li key={c.label} className="flex gap-4 bg-card p-4 rounded-2xl shadow-soft">
                    <span className="h-11 w-11 rounded-full gradient-red flex items-center justify-center shrink-0">
                      <c.icon className="h-5 w-5 text-white" />
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
                  title="แผนที่ Easy Mix"
                  src="https://www.google.com/maps?q=ChiangMai&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form with real validation */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="bg-card p-8 rounded-2xl shadow-soft h-fit"
            >
              <h2 className="text-2xl font-extrabold mb-6">แบบฟอร์มติดต่อ</h2>
              <div className="space-y-5">

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    ชื่อ <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("name")}
                    placeholder="ชื่อ-นามสกุล"
                    className={inputCls(errors.name?.message)}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    อีเมล <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="example@email.com"
                    className={inputCls(errors.email?.message)}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    หัวข้อ <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("subject")}
                    placeholder="หัวข้อที่ต้องการสอบถาม"
                    className={inputCls(errors.subject?.message)}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    ข้อความ <span className="text-primary">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="รายละเอียดที่ต้องการสอบถาม..."
                    className={inputCls(errors.message?.message) + " resize-none"}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full gradient-red text-white font-bold py-3.5 rounded-full shadow-red-sm cta-scale disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {submitting ? "กำลังส่ง..." : "ส่งข้อความ"}
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
