/**
 * BeforeAfter
 * Interactive drag-to-reveal ภาพ Before/After
 * – Before: วัตถุดิบดิบ (ซ้าย)
 * – After : อาหารสำเร็จรูป (ขวา)
 *
 * วิธีใช้:
 *   <BeforeAfter
 *     beforeSrc="/before.jpg"
 *     beforeLabel="วัตถุดิบ"
 *     afterSrc="/after.jpg"
 *     afterLabel="อาหารจานหรู"
 *     alt="ผัดกะเพรา Easy Mix"
 *   />
 */
import { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
  /** 0–100, default = 50 */
  initialPosition?: number;
  className?: string;
  aspectRatio?: "square" | "video" | "photo";
}

const ASPECT: Record<NonNullable<BeforeAfterProps["aspectRatio"]>, string> = {
  square: "aspect-square",
  video:  "aspect-video",
  photo:  "aspect-[4/3]",
};

const BeforeAfter = ({
  beforeSrc,
  afterSrc,
  beforeLabel = "ก่อน",
  afterLabel  = "หลัง",
  alt,
  initialPosition = 50,
  className,
  aspectRatio = "photo",
}: BeforeAfterProps) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // คำนวณ position จาก clientX
  const calcPosition = useCallback((clientX: number): number => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.max(2, Math.min(98, pct));
  }, []);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    setPosition(calcPosition(e.clientX));
  }, [isDragging, calcPosition]);
  const onMouseUp = useCallback(() => setIsDragging(false), []);

  // Touch events
  const onTouchStart = () => setIsDragging(true);
  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    setPosition(calcPosition(e.touches[0].clientX));
  }, [isDragging, calcPosition]);
  const onTouchEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-2xl select-none bg-muted",
        ASPECT[aspectRatio],
        isDragging ? "cursor-ew-resize" : "cursor-col-resize",
        className
      )}
      aria-label={`เปรียบเทียบ ${beforeLabel} และ ${afterLabel} ของ ${alt}`}
      role="img"
    >
      {/* ── AFTER image (full width underneath) ── */}
      <img
        src={afterSrc}
        alt={`${alt} — ${afterLabel}`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* ── BEFORE image (clipped by position) ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={`${alt} — ${beforeLabel}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${10000 / position}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* ── Divider line + handle ── */}
      <div
        className="absolute inset-y-0 z-20 flex items-center justify-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Vertical line */}
        <div className="absolute inset-y-0 w-[2px] bg-white shadow-red-sm" />

        {/* Handle circle */}
        <div
          className={cn(
            "relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card",
            "transition-transform duration-150",
            isDragging ? "scale-110" : "scale-100"
          )}
        >
          {/* Double chevron icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="hsl(357 79% 51%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* ── Labels ── */}
      <span className="absolute left-3 top-3 z-10 label-chip label-chip-red pointer-events-none">
        {beforeLabel}
      </span>
      <span
        className="absolute top-3 z-10 pointer-events-none"
        style={{
          right: `${100 - position}%`,
          marginRight: "0.75rem",
          opacity: position < 80 ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        <span className="label-chip" style={{
          background: "hsl(220 39% 11%)",
          color: "#fff",
          borderColor: "transparent",
        }}>
          {afterLabel}
        </span>
      </span>

      {/* ── Accessibility: keyboard control ── */}
      <button
        className="sr-only"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft")  setPosition(p => Math.max(2,  p - 5));
          if (e.key === "ArrowRight") setPosition(p => Math.min(98, p + 5));
        }}
        aria-label="ใช้ลูกศรซ้าย/ขวาเพื่อเลื่อนแถบเปรียบเทียบ"
        tabIndex={0}
      />
    </div>
  );
};

export default BeforeAfter;
