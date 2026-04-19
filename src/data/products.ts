import single from "@/assets/product-single.jpg";
import double from "@/assets/product-double.jpg";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  price: number;
  original?: number;
  img: string;
  badge?: string;
  size: string;
  pack: string;
  tag: "ยอดฮิต" | "ใหม่" | "ทั่วไป";
  description: string;
  highlights: string[];
  ingredients: string;
  usage: string[];
  storage: string;
  nutrition: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "easymix-600ml",
    name: "ซอสปรุงรส ตราอีซี่มิกซ์ 600 มล.",
    shortName: "Easy Mix 600 มล.",
    price: 65,
    img: single,
    badge: "ยอดฮิต",
    size: "600 มล.",
    pack: "1 ขวด",
    tag: "ยอดฮิต",
    description:
      "ซอสปรุงรสสูตรเข้มข้น ผสมเครื่องปรุงครบในขวดเดียว ใช้ง่าย รสชาติกลมกล่อม เหมาะกับเมนูผัด หมัก และทอดทุกชนิด",
    highlights: [
      "ผสมเครื่องปรุงครบในขวดเดียว",
      "ใช้แทนซอสหลายชนิดได้",
      "รสชาติกลมกล่อม คงที่ทุกครั้ง",
      "ลดเวลาทำอาหาร 50%",
    ],
    ingredients: "ซีอิ๊วถั่วเหลือง น้ำตาล เกลือ กระเทียม พริกไทย เครื่องเทศธรรมชาติ",
    usage: [
      "ผัด: ใส่ 2 ช้อนโต๊ะต่อจาน",
      "หมัก: ใส่ 3 ช้อนโต๊ะต่อเนื้อ 500 กรัม หมัก 20 นาที",
      "จิ้ม: ผสมกับน้ำมะนาวและพริกป่น",
    ],
    storage: "เก็บในที่แห้ง หลังเปิดควรเก็บในตู้เย็นและใช้ภายใน 3 เดือน",
    nutrition: [
      { label: "พลังงาน", value: "15 kcal / 15ml" },
      { label: "โซเดียม", value: "850 mg" },
      { label: "น้ำตาล", value: "2 g" },
      { label: "ไขมัน", value: "0 g" },
    ],
  },
  {
    slug: "easymix-200ml",
    name: "ซอสปรุงรส ตราอีซี่มิกซ์ 200 มล.",
    shortName: "Easy Mix 200 มล.",
    price: 35,
    img: single,
    size: "200 มล.",
    pack: "1 ขวด",
    tag: "ใหม่",
    description:
      "ขนาดพกพา เหมาะกับครัวเล็ก หรือพกไปทำอาหารนอกสถานที่ ใช้ง่าย รสชาติเข้มข้นเหมือนขวดใหญ่",
    highlights: [
      "ขนาดพกพา ใช้สะดวก",
      "เหมาะสำหรับครอบครัวเล็ก",
      "เก็บง่าย ไม่กินที่",
      "ลองสูตรก่อนซื้อขวดใหญ่",
    ],
    ingredients: "ซีอิ๊วถั่วเหลือง น้ำตาล เกลือ กระเทียม พริกไทย เครื่องเทศธรรมชาติ",
    usage: [
      "ผัด: ใส่ 2 ช้อนโต๊ะต่อจาน",
      "หมัก: ใส่ 2 ช้อนโต๊ะต่อเนื้อ 300 กรัม",
      "จิ้ม: ผสมกับน้ำมะนาว",
    ],
    storage: "เก็บในที่แห้ง หลังเปิดควรเก็บในตู้เย็น",
    nutrition: [
      { label: "พลังงาน", value: "15 kcal / 15ml" },
      { label: "โซเดียม", value: "850 mg" },
      { label: "น้ำตาล", value: "2 g" },
      { label: "ไขมัน", value: "0 g" },
    ],
  },
  {
    slug: "easymix-600ml-pack2",
    name: "ซอสปรุงรส ตราอีซี่มิกซ์ 600 มล. 3 ขวด",
    shortName: "Easy Mix 600 มล. แพ็คคู่",
    price: 119,
    original: 130,
    img: double,
    badge: "คุ้มกว่า",
    size: "600 มล. × 3",
    pack: "3 ขวด",
    tag: "ยอดฮิต",
    description:
      "แพ็คคู่สุดคุ้ม เหมาะสำหรับครอบครัวใหญ่หรือร้านอาหาร ประหยัดกว่าซื้อแยก พร้อมรสชาติเข้มข้นเหมือนเดิม",
    highlights: [
      "คุ้มกว่าซื้อแยก ฿11",
      "เหมาะกับร้านอาหาร",
      "เก็บได้นาน ไม่ต้องซื้อบ่อย",
      "ของขวัญมงคลให้คนรักการทำอาหาร",
    ],
    ingredients: "ซีอิ๊วถั่วเหลือง น้ำตาล เกลือ กระเทียม พริกไทย เครื่องเทศธรรมชาติ",
    usage: [
      "ผัด: ใส่ 2 ช้อนโต๊ะต่อจาน",
      "หมัก: ใส่ 3 ช้อนโต๊ะต่อเนื้อ 500 กรัม",
      "เหมาะกับการทำอาหารเลี้ยงคนเยอะ",
    ],
    storage: "เก็บในที่แห้ง หลังเปิดควรเก็บในตู้เย็นและใช้ภายใน 3 เดือน",
    nutrition: [
      { label: "พลังงาน", value: "15 kcal / 15ml" },
      { label: "โซเดียม", value: "850 mg" },
      { label: "น้ำตาล", value: "2 g" },
      { label: "ไขมัน", value: "0 g" },
    ],
  },
  {
    slug: "easymix-200ml-pack2",
    name: "ซอสปรุงรส ตราอีซี่มิกซ์ 200 มล. 3 ขวด",
    shortName: "Easy Mix 200 มล. แพ็คคู่",
    price: 59,
    original: 70,
    img: double,
    badge: "คุ้มกว่า",
    size: "200 มล. × 3",
    pack: "3 ขวด",
    tag: "ใหม่",
    description:
      "แพ็คคู่ขนาดเล็ก เหมาะกับการลองหรือเป็นของฝาก ประหยัดกว่าซื้อแยก ใช้สะดวกในครัวเล็ก",
    highlights: [
      "คุ้มกว่าซื้อแยก ฿11",
      "ขนาดพกพา 2 ขวด",
      "เหมาะเป็นของฝาก",
      "ลองได้หลายเมนู",
    ],
    ingredients: "ซีอิ๊วถั่วเหลือง น้ำตาล เกลือ กระเทียม พริกไทย เครื่องเทศธรรมชาติ",
    usage: ["ผัด: 2 ช้อนโต๊ะ/จาน", "หมัก: 2 ช้อนโต๊ะ/เนื้อ 300 กรัม", "จิ้ม: ผสมกับน้ำมะนาวและพริก"],
    storage: "เก็บในที่แห้ง หลังเปิดควรเก็บในตู้เย็น",
    nutrition: [
      { label: "พลังงาน", value: "15 kcal / 15ml" },
      { label: "โซเดียม", value: "850 mg" },
      { label: "น้ำตาล", value: "2 g" },
      { label: "ไขมัน", value: "0 g" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
