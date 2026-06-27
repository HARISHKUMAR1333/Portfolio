"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/data";
import Particles from "@/components/Particles";
import MagneticButton from "@/components/ui/MagneticButton";

/* Typing effect across the rotating role list. */
function useTypewriter(words: readonly string[]) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(words[0]);
      return;
    }
    const current = words[wordIdx % words.length];
    const speed = deleting ? 45 : 95;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words]);

  return text;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const typed = useTypewriter(profile.roles);

  // Scroll-driven hero choreography.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.78]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.7], [0, 8]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Parallax particle + glow layer */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Particles />
        <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-indigo/15 blur-[120px]" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity, filter }}
        className="relative z-10 mx-auto grid w-[min(1200px,92%)] grid-cols-1 items-center gap-12 pt-28 md:grid-cols-[1.15fr_0.85fr] md:pt-20"
      >
        {/* Left: copy */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-white/70"
            suppressHydrationWarning
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-violet" />
            Available for new opportunities · {profile.experienceYears} yrs experience
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-white/90">Hi, I&apos;m</span>
            <span className="block text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-4 flex h-9 items-center justify-center gap-1 font-display text-xl font-semibold text-accent-blue sm:text-2xl md:justify-start"
          >
            <span className="text-white/40">&lt;</span>
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-blink bg-accent-purple" />
            <span className="text-white/40">/&gt;</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mx-0"
            suppressHydrationWarning
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <MagneticButton href={profile.resumeUrl} download={profile.resumeFileName}>
              <Download className="h-4 w-4" /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.6 }}
            className="mt-8 flex items-center justify-center gap-3 md:justify-start"
          >
            {[
              // GitHub hidden for now — uncomment to re-enable once the profile URL is ready.
              // { icon: Github, href: profile.socials.github, label: "GitHub" },
              { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: profile.socials.email, label: "Email" },
              { icon: Phone, href: profile.socials.phone, label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="group grid h-11 w-11 place-items-center rounded-xl glass text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-glow"
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
            <span className="ml-2 hidden items-center gap-1.5 text-sm text-white/40 sm:flex">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Right: animated profile portrait */}
        <motion.div
          style={{ scale: imgScale }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-[260px] sm:w-[320px] md:w-full md:max-w-[380px]"
        >
          {/* rotating gradient rings */}
          <motion.div
            className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-accent-blue via-accent-violet to-accent-purple opacity-70 blur-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-3 rounded-[2.4rem] border border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[2rem] glass-strong">
            {/* Placeholder portrait (drop /profile.jpg to replace) */}
            <div className="flex flex-col items-center gap-3">
              <div className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-4xl font-extrabold text-white shadow-glow">
                {initials}
              </div>
              <p className="font-display text-sm font-medium text-white/50">
                {profile.title}
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_55%)]" />
          </div>

          {/* floating chips */}
          {[
            { label: "React", className: "left-[-12%] top-[18%]" },
            { label: "Node.js", className: "right-[-10%] top-[8%]" },
            { label: "AI Agents", className: "right-[-14%] bottom-[20%]" },
            { label: "AWS", className: "left-[-10%] bottom-[12%]" },
          ].map((chip, i) => (
            <motion.span
              key={chip.label}
              className={`absolute rounded-xl glass px-3 py-1.5 text-xs font-semibold text-white/80 shadow-glass ${chip.className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent-purple"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </span>
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.button>
    </section>
  );
}
