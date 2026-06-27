"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

function TimelineCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`relative flex w-full items-center ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Node */}
      <span className="absolute left-4 top-7 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
        <span className="absolute h-4 w-4 animate-pulse-ring rounded-full bg-accent-purple/60" />
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple ring-4 ring-ink-950" />
      </span>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`ml-12 w-full md:ml-0 md:w-[46%] ${
          isLeft ? "md:pr-10" : "md:pl-10"
        }`}
      >
        <div className="group rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
          <div className="mb-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-violet ring-1 ring-white/10">
              <Briefcase className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold leading-tight">
                {exp.role}
              </h3>
              <p className="text-sm text-accent-blue">{exp.company}</p>
            </div>
          </div>

          <span className="mb-4 inline-block rounded-full bg-white/[0.05] px-3 py-1 text-xs text-white/50">
            {exp.period}
          </span>

          <p className="mb-4 text-sm text-white/60">{exp.summary}</p>

          <ul className="mb-4 space-y-2">
            {exp.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-white/65">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-purple" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto w-[min(1100px,92%)]">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of building & leading"
          subtitle="Roles where I shipped real products, scaled systems, and grew teams."
        />

        <div ref={ref} className="relative">
          {/* Track */}
          <div className="absolute left-4 top-0 h-full w-[2px] -translate-x-1/2 bg-white/[0.08] md:left-1/2" />
          {/* Drawn progress */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 top-0 h-full w-[2px] origin-top -translate-x-1/2 bg-gradient-to-b from-accent-blue via-accent-violet to-accent-purple md:left-1/2"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
