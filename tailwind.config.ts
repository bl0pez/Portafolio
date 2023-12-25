import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors: {
        primary: "#06A8D1",
        primaryHover: "#09627b",
        secondary: "#38296C",
        nav: "#180F39",
        body: "#1C1242",
      },
    },
  },
  plugins: [],
}
export default config
