"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStack() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto w-[min(1100px,92%)]">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with"
          subtitle="The languages, frameworks, and platforms in my daily rotation."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.6, y: 20 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6, scale: 1.06 }}
              className="group relative cursor-default rounded-xl glass px-5 py-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span className="absolute inset-0 -z-10 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-accent-blue/30 to-accent-purple/30" />
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
