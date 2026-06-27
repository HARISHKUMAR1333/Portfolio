import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060f",
          900: "#080a18",
          850: "#0b0e22",
          800: "#10132b",
        },
        accent: {
          blue: "#5b8cff",
          indigo: "#6366f1",
          purple: "#a855f7",
          violet: "#8b5cf6",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(99,102,241,0.25), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99,102,241,0.5)",
        "glow-purple": "0 0 50px -12px rgba(168,85,247,0.55)",
        glass: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        neu: "8px 8px 24px rgba(0,0,0,0.55), -6px -6px 20px rgba(255,255,255,0.03)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        shimmer: "shimmer 2.2s infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
