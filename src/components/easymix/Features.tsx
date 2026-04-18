/**
 * Features section
 * แสดงจุดเด่น 4 ข้อของ Easy Mix
 * ใช้ Spatula SVG icon แทน lucide-react icon ตาม Design System
 */

/* ── Inline SVG icons (Spatula motif + Stroke line style) ── */
const icons = {
  spatula: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3l1 8M8 11l-1 10M7 3c0 0 3-1 5 2M13 14l4 7M13 14l4-11M13 14c0 0-2 1-4-2" />
    </svg>
  ),
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  flame: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c0 6-6 8-6 14a6 6 0 0012 0c0-6-6-8-6-14z" />
      <path d="M12 12c0 3-2 4-2 6a2 2 0 004 0c0-2-2-3-2-6z" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

const features = [
  {
    icon: icons.spatula,
    title: "ทำง่าย",
    desc: "ใช้แทนเครื่องปรุงหลายอย่าง จบในขวดเดียว ไม่ต้องวัดสัดส่วน",
  },
  {
    icon: icons.clock,
    title: "ประหยัดเวลา",
    desc: "ลดเวลาทำอาหารลงครึ่งหนึ่ง อร่อยคงที่ทุกครั้ง",
  },
  {
    icon: icons.flame,
    title: "รสชาติเข้มข้น",
    desc: "สูตรเฉพาะ กลมกล่อม หอมเครื่องปรุงไทยแท้ทุกคำ",
  },
  {
    icon: icons.shield,
    title: "วัตถุดิบคัดสรร",
    desc: "มาตรฐานส่งออก GMP / HACCP ไม่ใส่สีสังเคราะห์",
  },
] as const;

const Features = () => (
  <section className="py-20 bg-muted/40">
    <div className="container mx-auto">

      {/* Section header */}
      <div className="text-center mb-14">
        <span className="label-chip label-chip-red mb-4 inline-block">
          ทำไมต้อง Easy Mix
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          ครัวง่าย อร่อยได้{" "}
          <span className="text-primary">ทุกมื้อ</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          เคล็ดลับที่เปลี่ยนทุกมื้อธรรมดาให้พิเศษ
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`group bg-card rounded-2xl p-7 shadow-soft card-lift animate-fade-up delay-${(i + 1) * 100}`}
          >
            {/* Icon wrapper: default bg-red-tint, hover gradient-red */}
            <div className="h-14 w-14 rounded-xl bg-red-tint flex items-center justify-center mb-5 text-primary group-hover:gradient-red group-hover:text-white transition-smooth">
              {f.icon}
            </div>

            {/* Spatula bullet style via ::before via tailwind prose — */}
            {/* ใช้ class ปกติที่นี่ เพราะ list มีแค่ title + desc */}
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
