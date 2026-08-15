import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0F14",
        surface: "#10151C",
        raised: "#151C24",
        line: "#232B35",
        "line-soft": "#1A2029",
        ink: "#E6EDF3",
        muted: "#8B98A5",
        faint: "#5B6672",
        accent: "#4C8DFF",
        "accent-dim": "#2B4C82",
        "accent-soft": "#132340",
        gain: "#3DD68C",
        loss: "#FF6B6B",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1A2029 1px, transparent 1px), linear-gradient(to bottom, #1A2029 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
