"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { scaleUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { skillGroups } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

const icons: Record<string, LucideIcon> = {
  Layout,
  Server,
  BrainCircuit,
  Database,
  Cloud,
  Wrench,
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-white/75">{name}</span>
        <span className="text-white/40">{level}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="shimmer-bar relative h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-purple"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="Skills"
          title="A versatile, modern toolkit"
          subtitle="From pixel-perfect frontends to AI agents and cloud deployments — grouped by domain."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = icons[group.icon] ?? Layout;
            return (
              <motion.div key={group.category} variants={scaleUp}>
                <TiltCard className="h-full rounded-2xl" intensity={6}>
                  <div className="flex h-full flex-col rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-glow">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-violet ring-1 ring-white/10">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-semibold">
                        {group.category}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {group.skills.map((s) => (
                        <SkillBar key={s.name} {...s} />
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
