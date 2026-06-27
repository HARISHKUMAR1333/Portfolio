"use client";

import { motion } from "framer-motion";

/**
 * Animated aurora blobs + faint grid. Used as a page-wide ambient backdrop.
 * Pure transform/opacity animation; sits behind content (z-0).
 */
export default function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint [background-size:60px_60px] opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <motion.div
        className="aurora left-[-10%] top-[-10%] h-[40vw] w-[40vw] bg-accent-blue/40"
        animate={{ x: [0, 60, -30, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora right-[-10%] top-[20%] h-[45vw] w-[45vw] bg-accent-purple/35"
        animate={{ x: [0, -50, 30, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora bottom-[-15%] left-[25%] h-[42vw] w-[42vw] bg-accent-indigo/30"
        animate={{ x: [0, 40, -60, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,#05060f_85%)]" />
    </div>
  );
}
