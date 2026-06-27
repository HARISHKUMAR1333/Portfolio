"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Target } from "lucide-react";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { highlights, profile, stats, strengths } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import TiltCard from "@/components/ui/TiltCard";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering at the edge of full-stack & AI"
          subtitle="A snapshot of who I am, what drives me, and the impact I bring to a team."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: narrative */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <motion.p
              variants={fadeLeft}
              className="text-lg leading-relaxed text-white/70"
              suppressHydrationWarning
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={fadeLeft}
              className="relative overflow-hidden rounded-2xl glass p-6"
            >
              <Target className="mb-3 h-6 w-6 text-accent-violet" />
              <h3 className="mb-2 font-display text-lg font-semibold">
                Career Objective
              </h3>
              <p className="text-white/60">{profile.objective}</p>
            </motion.div>

            {/* Strengths */}
            <motion.div variants={fadeLeft}>
              <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
                <Sparkles className="h-5 w-5 text-accent-blue" /> Core Strengths
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75 transition-colors hover:border-accent-violet/50 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: highlights + stats */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-5"
          >
            <motion.div variants={fadeRight}>
              <TiltCard className="rounded-2xl">
                <div className="rounded-2xl glass-strong p-6">
                  <h3 className="mb-4 font-display text-lg font-semibold">
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-white/70">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-purple" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div variants={fadeRight} className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-gradient rounded-2xl bg-white/[0.02] p-5 text-center"
                >
                  <div className="font-display text-3xl font-extrabold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs leading-snug text-white/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
