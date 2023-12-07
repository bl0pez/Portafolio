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
        primary: "#06A8D1",
        primaryHover: "#09627b",
        secondary: "#2F2D2E",
      },
      transitionProperty: {
        background: "background-color",
      },
    },
  },
  plugins: [],
};
export default config;
