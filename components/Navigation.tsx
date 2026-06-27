"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-accent-blue via-accent-violet to-accent-purple"
      />

      <header
        className={`fixed left-1/2 top-4 z-50 w-[min(1100px,94%)] -translate-x-1/2 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-strong shadow-glass py-2.5" : "bg-transparent py-3.5"
        }`}
      >
        <nav className="flex items-center justify-between px-5">
          <button
            onClick={() => go("#home")}
            className="group flex items-center gap-2 font-display text-lg font-bold"
            aria-label="Go to top"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple shadow-glow">
              <Zap className="h-4 w-4 text-white" />
            </span>
            <span className="text-white/90 transition-colors group-hover:text-white">
              {profile.firstName}
              <span className="text-gradient">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/55 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/10 border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <a
            href={profile.socials.email}
            className="hidden rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-5 py-2 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-purple md:inline-block"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 flex flex-col gap-1 overflow-hidden px-3 pb-3 md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => go(link.href)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.href.slice(1)
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
