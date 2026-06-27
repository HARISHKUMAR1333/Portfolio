import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(14px)", y: 24 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const viewportOnce = { once: true, amount: 0.25 } as const;
