import logoShopee   from "@/assets/logo-shopee.png";
import logoLazada   from "@/assets/logo-lazada.png";
import logoLine     from "@/assets/logo-line.png";
import logoTiktok   from "@/assets/logo-tiktok.webp";
import logoLotuss   from "@/assets/logo-lotuss.png";
import logoBigc     from "@/assets/logo-bigc.png";
import logo7eleven  from "@/assets/logo-7eleven.png";
import logoMakro    from "@/assets/logo-makro.png";

export type Channel = {
  name: string;
  type: "online" | "store";
  desc: string;
  url: string;
  cta: string;
  logo: string;
  /** bg สำหรับ logo container — ใช้สีแบรนด์ให้โลโก้ดูถูกต้อง */
  logoBg: string;
};

export const channels: Channel[] = [
  {
    name: "Shopee",
    type: "online",
    desc: "ช้อปง่าย ส่งไว มีโปรโมชันทุกวัน",
    url: "https://shopee.co.th",
    cta: "ซื้อบน Shopee",
    logo: logoShopee,
    logoBg: "#EE4D2D",
  },
  {
    name: "Lazada",
    type: "online",
    desc: "รับคูปองส่วนลดและส่งฟรีทั่วประเทศ",
    url: "https://lazada.co.th",
    cta: "ซื้อบน Lazada",
    logo: logoLazada,
    logoBg: "#0F146D",
  },
  {
    name: "LINE Shopping",
    type: "online",
    desc: "สั่งผ่าน @easymix สอบถามได้ทันที",
    url: "https://line.me",
    cta: "แชทสั่งซื้อ",
    logo: logoLine,
    logoBg: "#06C755",
  },
  {
    name: "TikTok Shop",
    type: "online",
    desc: "ดูไลฟ์สด รับโปรพิเศษเฉพาะไลฟ์",
    url: "https://www.tiktok.com",
    cta: "ดูใน TikTok",
    logo: logoTiktok,
    logoBg: "#010101",
  },
  {
    name: "Lotus's",
    type: "store",
    desc: "หาซื้อได้ในโซนเครื่องปรุงทุกสาขาทั่วไทย",
    url: "https://www.lotuss.com",
    cta: "ค้นหาสาขา",
    logo: logoLotuss,
    logoBg: "#ffffff",
  },
  {
    name: "Big C",
    type: "store",
    desc: "วางจำหน่ายในซูเปอร์มาร์เก็ต Big C ทุกสาขา",
    url: "https://www.bigc.co.th",
    cta: "ค้นหาสาขา",
    logo: logoBigc,
    logoBg: "#9dc21b",
  },
  {
    name: "7-Eleven",
    type: "store",
    desc: "หาซื้อได้สะดวก 24 ชั่วโมง สาขาที่ร่วมรายการ",
    url: "https://www.7eleven.co.th",
    cta: "ค้นหาสาขา",
    logo: logo7eleven,
    logoBg: "#007a53",
  },
  {
    name: "Makro",
    type: "store",
    desc: "ขนาดประหยัดสำหรับร้านอาหารและธุรกิจ",
    url: "https://www.makro.co.th",
    cta: "ค้นหาสาขา",
    logo: logoMakro,
    logoBg: "#ffffff",
  },
];
