"use client";

import { ArrowUp, Github, Heart, Linkedin, Mail, Phone, Zap } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  const year = 2026; // build-time constant (date APIs unavailable at runtime in some envs)

  const go = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    if (typeof window !== "undefined" && window.__lenis)
      window.__lenis.scrollTo(el, { offset: -80 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  const toTop = () => {
    if (typeof window !== "undefined" && window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] pt-16">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple shadow-glow">
                <Zap className="h-4 w-4 text-white" />
              </span>
              {profile.name}
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              {profile.title} crafting responsive web apps and production AI
              agents. Open to opportunities and collaborations.
            </p>
            <div className="mt-5 flex gap-3">
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
                  className="grid h-10 w-10 place-items-center rounded-xl glass text-white/55 transition-all hover:-translate-y-1 hover:text-white hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className="group inline-flex items-center text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <span className="mr-0 h-px w-0 bg-accent-purple transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
              Get in touch
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href={profile.socials.email} className="hover:text-white">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.socials.phone} className="hover:text-white">
                  {profile.phone}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-white/40">
            © {year} {profile.name}. Built with
            <Heart className="h-3.5 w-3.5 text-accent-purple" /> using Next.js &
            Framer Motion.
          </p>
          <button
            onClick={toTop}
            className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-white/60 transition-all hover:-translate-y-1 hover:text-white hover:shadow-glow"
          >
            Back to Top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
