"use client";

import { useEffect, useRef } from "react";

/**
 * A soft radial glow that follows the pointer across the whole page,
 * adding depth. Pure transform updates = cheap. Skipped for reduced motion.
 */
export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { ...target };

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const render = () => {
      cur.x += (target.x - cur.x) * 0.08;
      cur.y += (target.y - cur.y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cur.x - 300}px, ${cur.y - 300}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      aria-hidden
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[600px] w-[600px] rounded-full opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.18), rgba(168,85,247,0.06) 45%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
