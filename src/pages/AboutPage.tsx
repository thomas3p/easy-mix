/**
 * AboutPage — เกี่ยวกับ Easy Mix
 * Story-driven layout: เชฟชล ผู้ก่อตั้ง + timeline + vision
 *
 * รูปเชฟ: ใส่รูปจริงที่ src/assets/chef-chon.jpg
 * ระหว่างรอรูป จะแสดง placeholder gradient สีแดง
 */
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/easymix/Header";
import Footer from "@/components/easymix/Footer";

// ── swap รูปเชฟที่นี่เมื่อมีรูปจริง ─────────────────────
import chefImg from "@/assets/chef-chon.jpg";
// const chefImg = ""; // ← ใส่ path รูปจริงตอนมีไฟล์

// ── Awards / Credentials ────────────────────────────────
const awards = [
  {
    icon: "🎓",
    title: "NSIA Graduate",
    sub: "New Zealand School of Food & Wine",
  },
  {
    icon: "⭐",
    title: "5-Star Hotel Chef",
    sub: "ประสบการณ์ 10 ปี นิวซีแลนด์",
  },
  {
    icon: "🏆",
    title: "7 สาขา Food Court",
    sub: "ห้างชั้นนำทั่วประเทศไทย",
  },
  {
    icon: "🍜",
    title: "สูตรเชฟมืออาชีพ",
    sub: "พัฒนากว่า 10 ปีในครัวระดับโลก",
  },
];

// ── Timeline ────────────────────────────────────────────
const timeline = [
  {
    year: "2556–2566",
    title: "ครัวโรงแรมห้าดาว นิวซีแลนด์",
    desc: "เชฟชลทำงานในครัวระดับ Fine Dining และโรงแรมห้าดาวที่นิวซีแลนด์ มากกว่า 10 ปี จนรู้ความลับของรสชาติที่คงที่ทุกจาน",
    accent: false,
  },
  {
    year: "2563",
    title: "กลับบ้านช่วงโควิด",
    desc: "กลับมาเชียงใหม่โดยไม่มีแผน แต่ได้พบกับคนที่ทำให้อยากอยู่ และเหตุผลที่ทำให้อยากสร้างอะไรสักอย่าง",
    accent: false,
  },
  {
    year: "2564",
    title: "ขวดแรก — ตี 2 ในครัวบ้านแม่",
    desc: "ไม่มีโรงงาน ไม่มีทีม ไม่มีแม้แต่ฉลาก มีแค่ความตั้งใจ ขวดแรกเสร็จตอนตี 2 และนำไปให้คนที่รักชิมก่อน \"อร่อยนะ\" — สองคำที่มีค่ากว่ารางวัลทั้งหมด",
    accent: true,
  },
  {
    year: "2565",
    title: "เปิดสาขาแรก Food Court",
    desc: "ทดสอบสูตร เรียนรู้รสนิยมคนไทย พิสูจน์ว่าซอสนี้ไม่ได้แค่อร่อย แต่ขายได้จริงในตลาดจริง",
    accent: false,
  },
  {
    year: "ปัจจุบัน",
    title: "7 สาขาทั่วประเทศ",
    desc: "ทุกสาขาใช้ซอส Easy Mix สูตรเดียวกัน ทุกจานออกมาเหมือนกัน — นั่นคือพลังของสูตรที่ชัดเจน",
    accent: false,
  },
];

// ── Why Easy Mix (4 reasons) ─────────────────────────────
const reasons = [
  {
    num: "01",
    title: "สูตรจากเชฟโรงแรมห้าดาว",
    desc: "ไม่ใช่สูตรจากนักการตลาด แต่เป็นสูตรจากคนที่อยู่ในครัวมากว่า 10 ปี รู้จริงทุกกรัมทุกหยด",
  },
  {
    num: "02",
    title: "ทดสอบจริงใน 7 สาขา",
    desc: "ลูกค้าหลายร้อยคนต่อวันกินอาหารที่ใช้ซอสนี้ รสชาติไม่ใช่เรื่องทดลอง แต่พิสูจน์แล้ว",
  },
  {
    num: "03",
    title: "ประหยัดเวลา ประหยัดเงิน",
    desc: "ไม่ต้องซื้อซอสหลายขวดที่ใช้แล้วทิ้ง Easy Mix ขวดเดียวทำได้หลายเมนู",
  },
  {
    num: "04",
    title: "อร่อยเหมือนกันทุกครั้ง",
    desc: "สูตรคงที่ ไม่ต้องเดา ผัดวันนี้อร่อย ผัดพรุ่งนี้ก็อร่อยเท่าเดิม ทุกครัว ทุกมือ",
  },
];

const AboutPage = () => {
  useSEO({ title: "เกี่ยวกับ Easy Mix", description: "เรื่องราวของเชฟชล จากครัวโรงแรมห้าดาวสู่ครัวบ้านคุณ" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* ── HERO BANNER ─────────────────────────────────── */}
        <section className="bg-muted/30 py-16 border-b border-border">
          <div className="container mx-auto text-center">
            <span className="label-chip label-chip-red mb-5 inline-block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              ซอสผัดสูตรเชฟ<br />
              <span className="text-primary">จากครัวโรงแรมห้าดาว</span><br />
              สู่ครัวบ้านคุณ
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Easy Mix ไม่ได้เกิดจากโรงงาน ไม่ได้เกิดจากห้องประชุม<br />
              แต่เกิดจากครัวเล็ก ๆ ที่เชียงใหม่ ในมือของเชฟคนหนึ่ง
            </p>
          </div>
        </section>

        {/* ── CHEF SECTION ────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left — Chef photo + awards */}
              <div className="space-y-6">
                {/* Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[3/4] bg-muted">
                  {chefImg ? (
                    <img
                      src={chefImg}
                      alt="เชฟชล ผู้ก่อตั้ง Easy Mix"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    /* Placeholder — swap เมื่อมีรูปจริง */
                    <div className="w-full h-full gradient-red flex flex-col items-center justify-center gap-4">
                      <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none"
                          stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <p className="text-white/80 text-sm font-medium">รูปเชฟชล — กรุณาใส่รูปจริง</p>
                      <p className="text-white/50 text-xs">src/assets/chef-chon.jpg</p>
                    </div>
                  )}

                  {/* Name badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-extrabold text-xl">เชฟชล</p>
                    <p className="text-white/70 text-sm">ผู้ก่อตั้ง Easy Mix · NSIA Graduate · NZ</p>
                  </div>
                </div>

                {/* Award cards */}
                <div className="grid grid-cols-2 gap-3">
                  {awards.map((a) => (
                    <div key={a.title}
                      className="bg-card border border-border rounded-2xl p-4 shadow-soft">
                      <div className="text-2xl mb-2">{a.icon}</div>
                      <p className="font-bold text-sm leading-tight">{a.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-snug">{a.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Story text */}
              <div className="space-y-8 lg:pt-4">
                <div>
                  <span className="label-chip label-chip-red mb-4 inline-block">
                    จุดเริ่มต้น
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                    จากนิวซีแลนด์<br />
                    <span className="text-primary">กลับบ้าน</span>
                  </h2>
                  <div className="space-y-4 text-foreground/80 leading-relaxed">
                    <p>
                      เชฟชล ผู้ก่อตั้ง Easy Mix ใช้เวลา <strong className="text-foreground">10 ปี</strong> ในครัวโรงแรมห้าดาว
                      และร้านอาหารชั้นนำที่นิวซีแลนด์ จบการศึกษาจากสถาบัน{" "}
                      <strong className="text-foreground">NSIA (New Zealand School of Food & Wine)</strong>{" "}
                      ก่อนจะกลับมาประเทศไทยในช่วงโควิด
                    </p>
                    <p>
                      ตอนแรกการกลับมาไม่ได้มีแผนอะไร แค่อยากพักผ่อน อยากกลับมาเจอครอบครัว
                    </p>
                    <p className="italic text-muted-foreground border-l-4 border-primary pl-4 py-1">
                      "แต่แล้วบางอย่างก็เปลี่ยนไป มีคนคนหนึ่งที่ทำให้เขาอยากอยู่
                      และมีเหตุผลหนึ่งที่ทำให้เขาอยากสร้างอะไรสักอย่าง"
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold mb-4">
                    ปัญหาที่เจอ — ทำไมรสชาติไม่เหมือนเดิมซักรอบ?
                  </h3>
                  <div className="space-y-3">
                    {[
                      '"ผัดกะเพรารสชาติไม่เหมือนเดิม"',
                      '"ต้องซื้อเครื่องปรุงหลายอย่าง แล้วก็ไม่รู้ว่าใส่เท่าไหร่"',
                      '"ทำครั้งหนึ่งอร่อย ทำอีกทีไม่เหมือนเดิม"',
                    ].map((q) => (
                      <div key={q}
                        className="flex gap-3 items-start bg-muted/50 rounded-xl px-4 py-3">
                        <span className="text-primary font-bold shrink-0 mt-0.5">—</span>
                        <p className="text-sm text-foreground/80 italic">{q}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    คนไทยส่วนใหญ่ไม่ได้ขาดฝีมือ แต่ขาด<strong className="text-foreground">เวลา</strong>{" "}
                    ขาด<strong className="text-foreground">ความมั่นใจ</strong> และขาด{" "}
                    <strong className="text-foreground">ความสม่ำเสมอ</strong>
                  </p>
                </div>

                <div className="bg-foreground rounded-2xl p-6 text-background">
                  <p className="text-sm text-background/60 mb-2 font-semibold uppercase tracking-widest text-xs">
                    ขวดแรก — ตี 2 ในครัวบ้านแม่
                  </p>
                  <p className="leading-relaxed text-background/90 mb-4">
                    ไม่มีโรงงาน ไม่มีทีม ไม่มีแม้แต่ฉลาก มีแค่ความตั้งใจ
                    ขวดแรกเสร็จตอนตี 2 และนำไปให้คนที่รักชิมก่อน
                  </p>
                  <p className="text-2xl font-extrabold text-primary">
                    "อร่อยนะ"
                  </p>
                  <p className="text-sm text-background/50 mt-1">
                    สองคำที่มีค่ากว่ารางวัลทั้งหมดที่เคยได้
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TIMELINE ────────────────────────────────────── */}
        <section className="py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-14">
              <span className="label-chip label-chip-red mb-4 inline-block">Timeline</span>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                จากครัวบ้านแม่<br />
                <span className="text-primary">สู่ 7 สาขาทั่วประเทศ</span>
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[88px] top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <div key={i}
                    className={`relative flex gap-6 rounded-2xl p-6 shadow-soft transition-smooth
                      ${t.accent
                        ? "bg-foreground text-background"
                        : "bg-card border border-border"
                      }`}
                  >
                    {/* Year pill */}
                    <div className={`shrink-0 text-right w-16 pt-0.5
                      ${t.accent ? "text-primary" : "text-primary"}`}>
                      <span className="text-xs font-bold leading-tight block">
                        {t.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className="relative shrink-0 hidden md:block">
                      <div className={`w-3 h-3 rounded-full mt-1.5 ring-2 ring-background
                        ${t.accent ? "bg-primary" : "bg-primary"}`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className={`font-extrabold mb-1.5 text-base
                        ${t.accent ? "text-white" : "text-foreground"}`}>
                        {t.title}
                      </h3>
                      <p className={`text-sm leading-relaxed
                        ${t.accent ? "text-background/70" : "text-muted-foreground"}`}>
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY EASY MIX ────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <span className="label-chip label-chip-red mb-4 inline-block">
                ทำไมต้อง Easy Mix
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                ไม่ใช่แค่ซอส<br />
                <span className="text-primary">แต่เป็นสะพานเชื่อม</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {reasons.map((r) => (
                <div key={r.num}
                  className="group flex gap-5 bg-card border border-border rounded-2xl p-6 shadow-soft card-lift">
                  <div className="text-3xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-smooth shrink-0 leading-none mt-1">
                    {r.num}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base mb-2">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IS IT FOR ────────────────────────────────── */}
        <section className="py-20 section-dark">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Easy Mix เหมาะกับ
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">
                  ไม่ว่าคุณจะเป็น<br />
                  <span className="text-primary">ใครก็ตาม</span>
                </h2>
                <ul className="spatula-list space-y-3">
                  {[
                    "คนทำงานที่กลับบ้านดึก",
                    "แม่บ้านที่ต้องทำกับข้าวทุกวัน",
                    "หนุ่มสาวที่อยากเริ่มหัดทำอาหาร",
                    "คนที่ไม่เคยเข้าครัวเลย",
                  ].map((w) => (
                    <li key={w} className="text-white/90 text-base">{w}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                  วิสัยทัศน์ของเรา
                </p>
                <p className="text-white text-lg leading-relaxed">
                  เราไม่ได้อยากเป็นแบรนด์ที่ใหญ่ที่สุด
                </p>
                <p className="text-white/70 leading-relaxed">
                  เราอยากเป็นแบรนด์ที่อยู่ในครัวของคุณ — และทำให้คุณยิ้มได้ทุกมื้อ
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/50 text-sm leading-relaxed italic">
                    "วันหนึ่ง เมื่อคุณเปิดตู้เย็น เห็นขวด Easy Mix แล้วรู้สึกว่า
                    <strong className="text-primary not-italic"> เย้ วันนี้ทำกับข้าวง่ายแล้ว</strong>
                    — วันนั้น คือวันที่เราทำสำเร็จ"
                  </p>
                  <p className="text-white/40 text-xs mt-3">— เชฟชล, ผู้ก่อตั้ง Easy Mix</p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 gradient-red text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-red cta-scale"
                >
                  ติดต่อเราได้เลย
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
