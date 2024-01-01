import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4717F6",
        primaryHover: "#4717F6/70",
        secondary: "#E7DFDD",
        body: "#0E0B16",
        card: "#1E1A2A",
      },
    },
  },
  plugins: [],
};
export default config;
