import { ExternalLink, ShoppingBag, Store } from "lucide-react";
import { channels } from "@/data/channels";

type Props = {
  compact?: boolean;
  title?: string;
  subtitle?: string;
};

const WhereToBuy = ({ compact = false, title = "ช่องทางการซื้อ", subtitle = "เลือกซื้อ Easy Mix ได้ที่ช่องทางที่คุณสะดวก" }: Props) => {
  const online = channels.filter((c) => c.type === "online");
  const stores = channels.filter((c) => c.type === "store");

  const renderCard = (c: typeof channels[number]) => (
    <a
      key={c.name}
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card rounded-2xl p-5 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1 border border-border flex flex-col"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="h-12 w-12 rounded-xl flex items-center justify-center text-background font-extrabold text-xl shrink-0"
          style={{ backgroundColor: c.color }}
        >
          {c.initial}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold leading-tight truncate">{c.name}</h3>
          <span className="text-xs text-muted-foreground">{c.type === "online" ? "ออนไลน์" : "ร้านค้าปลีก"}</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{c.desc}</p>
      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
        {c.cta} <ExternalLink className="h-3.5 w-3.5" />
      </span>
    </a>
  );

  return (
    <section className={compact ? "py-10" : "py-20"}>
      <div className="container mx-auto">
        <div className={`text-center ${compact ? "mb-8" : "mb-12"}`}>
          <h2 className={`font-extrabold mb-3 ${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl"}`}>{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mb-10">
          <h3 className="flex items-center gap-2 font-bold mb-4">
            <ShoppingBag className="h-5 w-5 text-primary" /> ช่องทางออนไลน์
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{online.map(renderCard)}</div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-bold mb-4">
            <Store className="h-5 w-5 text-primary" /> ร้านค้าปลีก
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{stores.map(renderCard)}</div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
