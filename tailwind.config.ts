import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "perf-black": "#050505",
        "warm-ivory": "#F4F0E7",
        "paper-white": "#FFFDF7",
        "signal-red": "#C41230",
        "signal-red-dark": "#8B0E22",
        marigold: "#FFD21F",
        "deep-charcoal": "#171717",
        "soft-gray": "#D8D2C7",
        "muted-text": "#5E5A52",
        "accent-green": "#0B6B4F",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
