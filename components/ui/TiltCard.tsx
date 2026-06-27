"use client";

import { useRef, type ReactNode } from "react";

/**
 * 3D tilt card driven by pointer position, with a glare highlight that tracks
 * the cursor. Falls back gracefully (no tilt) on touch via pointer events.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 10,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * intensity;
    const ry = (px - 0.5) * intensity;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative transition-transform duration-200 ease-out ${className}`}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [.tilt-card:hover>&]:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx,50%) var(--my,50%), rgba(168,85,247,0.18), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
