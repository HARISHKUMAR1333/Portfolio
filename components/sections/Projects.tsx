"use client";

import { motion } from "framer-motion";
import {
  Database,
  GraduationCap,
  HardDrive,
  Mic,
  PhoneCall,
  Sparkle,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

const icons: Record<string, LucideIcon> = {
  PhoneCall,
  Mic,
  Database,
  GraduationCap,
  HardDrive,
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="Projects"
          title="AI engineering, shipped"
          subtitle="Production-grade AI agents and platforms — built end-to-end, measured by impact."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, i) => {
            const Icon = icons[project.icon] ?? Sparkle;
            const featured = i === 0;
            return (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className={featured ? "md:col-span-2" : ""}
              >
                <TiltCard className="h-full rounded-3xl" intensity={7}>
                  <article className="group relative h-full overflow-hidden rounded-3xl glass-strong p-7">
                    {/* animated glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent-purple/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

                    <div
                      className={`relative flex flex-col gap-6 ${
                        featured ? "md:flex-row md:items-center" : ""
                      }`}
                    >
                      {/* Image placeholder */}
                      <div
                        className={`relative grid aspect-video w-full place-items-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-850 to-ink-900 ${
                          featured ? "md:w-2/5" : ""
                        }`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.18),transparent_60%)]" />
                        <Icon className="h-14 w-14 text-accent-violet/80 transition-transform duration-500 group-hover:scale-110" />
                        <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur">
                          {project.tagline}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-purple/15 px-3 py-1 text-[11px] font-semibold text-accent-violet">
                            <Sparkle className="h-3 w-3" /> {project.highlight}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-bold">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          {project.description}
                        </p>

                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                          {project.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-[13px] text-white/65"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-blue" />
                              {f}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
