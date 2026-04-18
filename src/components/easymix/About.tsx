/**
 * About — Homepage section (teaser)
 * แสดงรูปเชฟ + story summary สั้น ๆ ดึงคนไปหน้า /about
 *
 * รูปเชฟ: import chefImg from "@/assets/chef-chon.jpg"
 */
import { Link } from "react-router-dom";

import chefImg from "@/assets/chef-chon.jpg";

const stats = [
  { value: "10+", label: "ปีในครัวโรงแรมห้าดาว" },
  { value: "7", label: "สาขา Food Court" },
  { value: "NSIA", label: "New Zealand" },
  { value: "4.9★", label: "รีวิวจากลูกค้า" },
];

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">

      {/* ── Left: Chef photo ───────────────────────────── */}
      <div className="relative">
        {/* Main photo */}
        <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/5] bg-muted">
          {chefImg ? (
            <img
              src={chefImg}
              alt="เชฟชล ผู้ก่อตั้ง Easy Mix"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full gradient-red flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                  stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <p className="text-white/70 text-sm">รูปเชฟชล</p>
            </div>
          )}

          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-extrabold">เชฟชล</p>
            <p className="text-white/60 text-sm">ผู้ก่อตั้ง Easy Mix · NSIA Graduate · NZ</p>
          </div>
        </div>

        {/* Floating badge — award */}
        <div className="absolute -bottom-5 -right-5 bg-foreground text-background rounded-2xl px-5 py-4 shadow-card">
          <p className="text-xs text-background/50 font-bold uppercase tracking-wider mb-1">ประสบการณ์</p>
          <p className="text-2xl font-extrabold text-primary">10+ ปี</p>
          <p className="text-xs text-background/60 mt-0.5">ครัวโรงแรมห้าดาว</p>
        </div>
      </div>

      {/* ── Right: Story ───────────────────────────────── */}
      <div>
        <span className="label-chip label-chip-red mb-5 inline-block">
          เกี่ยวกับแบรนด์
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          ซอสที่เกิดจาก<br />
          <span className="text-primary">ครัวบ้านแม่</span><br />
          ตี 2 ของคืนหนึ่ง
        </h2>

        <p className="text-muted-foreground text-base leading-relaxed mb-4">
          เชฟชลใช้เวลา 10 ปีในครัวโรงแรมห้าดาวที่นิวซีแลนด์ ก่อนจะกลับมาเชียงใหม่
          และเริ่มต้นทำซอส Easy Mix ขวดแรก ในครัวบ้านแม่ โดยไม่มีโรงงาน ไม่มีทีม
          มีแค่ความตั้งใจที่จะทำให้คนไทยทำอาหารอร่อยได้ง่ายขึ้น
        </p>

        <p className="text-muted-foreground text-base leading-relaxed mb-8">
          วันนี้ Easy Mix มี 7 สาขาในห้างชั้นนำทั่วประเทศ — และทุกสาขาใช้ซอสสูตรเดียวกัน
          เพราะสูตรที่ดีควรทำให้อาหารออกมาเหมือนกันทุกครั้ง
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {stats.map((s) => (
            <div key={s.label}
              className="bg-muted/50 rounded-xl px-4 py-3 border border-border">
              <p className="text-xl font-extrabold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-bold hover:bg-foreground/90 transition-smooth"
        >
          อ่านเรื่องราวของเรา
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

    </div>
  </section>
);

export default About;
