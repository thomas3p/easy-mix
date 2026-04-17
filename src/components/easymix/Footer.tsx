import { Facebook, Phone, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/easymix-logo.png";

const Footer = () => (
  <footer className="bg-muted/40 pt-16 pb-8 border-t border-border">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <img src={logo} alt="Easy Mix" className="h-14 w-auto mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            ซอสปรุงรสที่ทำให้ทุกมื้อง่ายและอร่อยกว่าที่เคย
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">เมนู</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-primary transition-smooth">สินค้า</Link></li>
            <li><Link to="/recipes" className="hover:text-primary transition-smooth">สูตรอาหาร</Link></li>
            <li><Link to="/shop" className="hover:text-primary transition-smooth">ร้านค้า</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-smooth">เกี่ยวกับแบรนด์</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-smooth">บทความ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">ช่วยเหลือ</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/how-to" className="hover:text-primary transition-smooth">วิธีใช้ผลิตภัณฑ์</Link></li>
            <li><Link to="/how-to" className="hover:text-primary transition-smooth">คำถามที่พบบ่อย</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-smooth">ติดต่อเรา</Link></li>
            <li><a href="#" className="hover:text-primary transition-smooth">นโยบายความเป็นส่วนตัว</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">ติดต่อเรา</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 02-123-4567</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> @easymix</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@easymix.co</li>
            <li className="flex items-center gap-2"><Facebook className="h-4 w-4 text-primary" /> EasyMix Official</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Easy Mix. All rights reserved.</p>
        <p>Made with ❤️ in Thailand</p>
      </div>
    </div>
  </footer>
);

export default Footer;
