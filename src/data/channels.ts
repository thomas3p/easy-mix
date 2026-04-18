export type Channel = {
  name: string;
  type: "online" | "store";
  desc: string;
  url: string;
  cta: string;
  color: string;
  initial: string;
};

export const channels: Channel[] = [
  {
    name: "Shopee",
    type: "online",
    desc: "ช้อปง่าย ส่งไว มีโปรโมชันทุกวัน",
    url: "https://shopee.co.th",
    cta: "ซื้อบน Shopee",
    color: "#EE4D2D",
    initial: "S",
  },
  {
    name: "Lazada",
    type: "online",
    desc: "รับคูปองส่วนลดและส่งฟรีทั่วประเทศ",
    url: "https://lazada.co.th",
    cta: "ซื้อบน Lazada",
    color: "#0F146D",
    initial: "L",
  },
  {
    name: "LINE Shopping",
    type: "online",
    desc: "สั่งผ่าน @easymix สอบถามได้ทันที",
    url: "https://line.me",
    cta: "แชทสั่งซื้อ",
    color: "#06C755",
    initial: "@",
  },
  {
    name: "TikTok Shop",
    type: "online",
    desc: "ดูไลฟ์สด รับโปรพิเศษเฉพาะไลฟ์",
    url: "https://www.tiktok.com",
    cta: "ดูใน TikTok",
    color: "#000000",
    initial: "T",
  },
  {
    name: "Lotus's",
    type: "store",
    desc: "หาซื้อได้ในโซนเครื่องปรุงทุกสาขาทั่วไทย",
    url: "https://www.lotuss.com",
    cta: "ค้นหาสาขา",
    color: "#00A1E4",
    initial: "L",
  },
  {
    name: "Big C",
    type: "store",
    desc: "วางจำหน่ายในซูเปอร์มาร์เก็ต Big C ทุกสาขา",
    url: "https://www.bigc.co.th",
    cta: "ค้นหาสาขา",
    color: "#E60012",
    initial: "B",
  },
  {
    name: "7-Eleven",
    type: "store",
    desc: "หาซื้อได้สะดวก 24 ชั่วโมง สาขาที่ร่วมรายการ",
    url: "https://www.7eleven.co.th",
    cta: "ค้นหาสาขา",
    color: "#EF7C2A",
    initial: "7",
  },
  {
    name: "Makro",
    type: "store",
    desc: "ขนาดประหยัดสำหรับร้านอาหารและธุรกิจ",
    url: "https://www.makro.co.th",
    cta: "ค้นหาสาขา",
    color: "#003DA5",
    initial: "M",
  },
];
