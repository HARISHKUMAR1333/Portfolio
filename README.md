# Harishkumar A — Portfolio

A premium, fully-animated personal portfolio for **Harishkumar A · Full-Stack AI Engineer**.
Built with cinematic, scroll-driven storytelling inspired by Apple, Linear, Stripe & Awwwards.

## ✨ Highlights

- **Cinematic scroll** — Lenis smooth scrolling + scroll-linked hero parallax, fade, scale & blur
- **Section reveals** — fade up/left/right, scale, blur-reveal, staggered children (Framer Motion)
- **Self-drawing timeline** for experience, animated skill bars, animated counters
- **Glassmorphism + neumorphism** dark UI in a black / blue / purple palette
- **Micro-interactions** — magnetic buttons, ripple clicks, 3D tilt cards, custom cursor, mouse-follow glow
- **Canvas particle field** with cursor attraction & connection lines
- **Elegant loader**, glass sticky nav with scroll progress + active-section highlight
- **SEO** — metadata, Open Graph, JSON-LD Person schema, robots & sitemap
- **Accessible & fast** — GPU-accelerated transforms, full `prefers-reduced-motion` support

## 🧱 Stack

React · Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis · Lucide Icons

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## 🛠 Customisation

| What | Where |
| --- | --- |
| All content (bio, skills, experience, projects, education…) | `lib/data.ts` |
| Theme colours, shadows, animations | `tailwind.config.ts` |
| Global styles & utilities (glass, gradients) | `app/globals.css` |
| SEO / metadata | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` |

### Two things to drop in

1. **Résumé** — add your PDF to `public/resume.pdf` (see `public/resume.txt`).
2. **Profile photo** *(optional)* — the hero shows an animated monogram placeholder.
   To use a real photo, add `public/profile.jpg` and swap the placeholder block in
   `components/sections/Hero.tsx`.
3. **Social links** — GitHub & LinkedIn URLs in `lib/data.ts` are placeholders; update `profile.socials`.

## 📁 Structure

```
app/            # Next.js App Router (layout, page, SEO routes)
components/
  sections/     # Hero, About, Skills, Experience, Projects, Education, TechStack, Contact, Footer
  ui/           # Reusable: MagneticButton, TiltCard, Counter, SectionHeading, AuroraBackground, MouseGlow
  *.tsx         # SmoothScroll, Loader, Navigation, CustomCursor, Particles
lib/            # data.ts (content) · motion.ts (animation variants)
```

> All content is extracted from the résumé. Placeholders are clearly marked in `lib/data.ts`
> where the résumé was silent (social URLs, exact employment dates, profile photo).
# Portfolio
