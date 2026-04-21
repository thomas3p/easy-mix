/**
 * LoadingState / ErrorState / EmptyState
 * ใช้แทน spinner ใน section ที่ดึงข้อมูลจาก API
 */
import { Link } from "react-router-dom";

export const SectionLoader = ({ rows = 3 }: { rows?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-soft animate-pulse">
        <div className="aspect-[4/3] bg-muted" />
        <div className="p-5 space-y-3">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-3 bg-muted rounded w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

export const CardLoader = ({ cols = 4 }: { cols?: number }) => (
  <div className={`grid grid-cols-2 lg:grid-cols-${cols} gap-5`}>
    {Array.from({ length: cols }).map((_, i) => (
      <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-soft animate-pulse">
        <div className="aspect-square bg-muted" />
        <div className="p-4 space-y-2">
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-1/3" />
        </div>
      </div>
    ))}
  </div>
);

export const ErrorState = ({ message = "ไม่สามารถโหลดข้อมูลได้" }: { message?: string }) => (
  <div className="py-16 text-center">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="hsl(357 79% 51%)" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    </div>
    <p className="text-muted-foreground text-sm">{message}</p>
    <button onClick={() => window.location.reload()}
      className="mt-4 text-sm text-primary hover:underline font-medium">
      ลองใหม่
    </button>
  </div>
);

export const EmptyState = ({ message = "ยังไม่มีข้อมูล" }: { message?: string }) => (
  <div className="py-16 text-center">
    <p className="text-muted-foreground text-sm">{message}</p>
  </div>
);

export const DetailLoader = () => (
  <div className="container mx-auto px-4 py-12 animate-pulse">
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="aspect-square bg-muted rounded-3xl" />
      <div className="space-y-4">
        <div className="h-6 bg-muted rounded w-1/4" />
        <div className="h-10 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
        <div className="h-12 bg-muted rounded-full w-1/2 mt-8" />
      </div>
    </div>
  </div>
);
