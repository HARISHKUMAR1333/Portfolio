"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

/**
 * Elegant intro loader: animated monogram logo, gradient progress bar, then
 * a smooth curtain reveal into the hero. Locks scroll while visible.
 */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 450);
      }
      setProgress(Math.min(p, 100));
    }, 180);
    return () => {
      clearInterval(id);
      document.body.style.overflow = "";
    };
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-950"
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 -z-10 animate-pulse rounded-3xl bg-accent-purple/25 blur-2xl" />
            <div className="relative grid h-24 w-24 place-items-center rounded-3xl border border-white/10 glass">
              <span className="font-display text-3xl font-extrabold text-gradient">
                {initials}
              </span>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                <motion.rect
                  x="2"
                  y="2"
                  width="96"
                  height="96"
                  rx="22"
                  fill="none"
                  stroke="url(#lg)"
                  strokeWidth="2"
                  strokeDasharray="380"
                  initial={{ strokeDashoffset: 380 }}
                  animate={{ strokeDashoffset: 380 - (progress / 100) * 380 }}
                  transition={{ ease: "linear" }}
                />
                <defs>
                  <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5b8cff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          <div className="h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <p className="mt-4 font-display text-sm tracking-[0.3em] text-white/40">
            {Math.round(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
