"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-14 flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent-violet"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-purple animate-pulse" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`max-w-2xl text-base text-white/55 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
