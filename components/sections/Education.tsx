"use client";

import { motion } from "framer-motion";
import {
  Award,
  Bot,
  GraduationCap,
  TrendingDown,
  Users,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, scaleUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { achievements, education } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

const achIcons: Record<string, LucideIcon> = {
  Users,
  TrendingDown,
  Bot,
  Award,
};

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="Education & Achievements"
          title="Foundations & milestones"
          subtitle="Academic background, and the measurable wins that define my work."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Education timeline */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold">
              <GraduationCap className="h-5 w-5 text-accent-violet" /> Education
            </h3>
            <div className="relative space-y-6 pl-8">
              <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-accent-blue to-accent-purple/30" />
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute left-[-1.75rem] top-2 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple ring-4 ring-ink-950" />
                  <div className="rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:shadow-glow">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display font-semibold text-white/90">
                        {edu.degree}
                      </h4>
                      <span className="whitespace-nowrap rounded-full bg-white/[0.05] px-3 py-1 text-xs text-white/50">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-white/55">{edu.institution}</p>
                    <span className="mt-3 inline-block rounded-md bg-accent-purple/15 px-3 py-1 text-xs font-semibold text-accent-violet">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold">
              <Award className="h-5 w-5 text-accent-violet" /> Achievements
            </h3>
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-4 sm:grid-cols-2"
            >
              {achievements.map((a) => {
                const Icon = achIcons[a.icon] ?? Award;
                return (
                  <motion.div key={a.title} variants={scaleUp}>
                    <TiltCard className="h-full rounded-2xl" intensity={6}>
                      <div className="group h-full rounded-2xl glass p-5 transition-all duration-300 hover:shadow-glow-purple">
                        <span className="mb-3 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-violet ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h4 className="font-display font-semibold text-white/90">
                          {a.title}
                        </h4>
                        <p className="mt-1.5 text-sm text-white/55">
                          {a.description}
                        </p>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
