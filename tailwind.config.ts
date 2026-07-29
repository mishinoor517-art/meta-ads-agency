import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0D1A",
          panel: "#12162B",
          panel2: "#171C36",
          line: "#262C4A",
        },
        ink: {
          DEFAULT: "#F5F6FA",
          muted: "#8B93A7",
          dim: "#5A6280",
        },
        accent: {
          blue: "#4C6FFF",
          violet: "#8B5CF6",
          coral: "#FF6B4A",
          teal: "#3DDCB8",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(140,150,190,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(140,150,190,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(76,111,255,0.18), transparent 60%)",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out infinite 1.2s",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
