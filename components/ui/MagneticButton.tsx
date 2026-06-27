"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  download?: boolean | string;
  target?: string;
  ariaLabel?: string;
};

/**
 * Magnetic button with a ripple on click. Translates toward the pointer for a
 * tactile "pull" effect, then springs back on leave.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  target,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const ripple = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const circle = document.createElement("span");
    const d = Math.max(el.clientWidth, el.clientHeight);
    const rect = el.getBoundingClientRect();
    circle.style.cssText = `position:absolute;border-radius:9999px;pointer-events:none;width:${d}px;height:${d}px;left:${
      e.clientX - rect.left - d / 2
    }px;top:${e.clientY - rect.top - d / 2}px;background:rgba(255,255,255,0.35);transform:scale(0);opacity:0.7;`;
    circle.animate(
      [
        { transform: "scale(0)", opacity: 0.6 },
        { transform: "scale(2.4)", opacity: 0 },
      ],
      { duration: 600, easing: "ease-out" }
    );
    el.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "text-white shadow-glow bg-gradient-to-r from-accent-blue via-accent-violet to-accent-purple hover:shadow-glow-purple"
      : "text-white/90 glass hover:text-white hover:border-white/20";

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </>
  );

  const shared = {
    ref,
    className: `${base} ${styles} ${className}`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onMouseDown: ripple,
    style: { willChange: "transform" },
    "aria-label": ariaLabel,
  } as const;

  return (
    <motion.span
      whileTap={{ scale: 0.96 }}
      className="inline-block"
      style={{ display: "inline-block" }}
    >
      {href ? (
        <a {...shared} href={href} download={download} target={target} rel={target ? "noopener noreferrer" : undefined}>
          {content}
        </a>
      ) : (
        <button {...shared} onClick={onClick} type="button">
          {content}
        </button>
      )}
    </motion.span>
  );
}
