import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(system|system-darkGrey|system-grey)(-\d+)?/,
      variants: ['hover', 'focus']
    }
  ],
  theme: {
    extend: {
      colors: {
        system: {
          white: "var(--white)",
          black: "var(--black)",
          red: "var(--red)",
          darkRed: "var(--dark-red)",
          green: "var(--green)",
          darkGreen: "var(--dark-green)",
          grey1: "var(--grey1)",
          grey2: "var(--grey2)",
          grey3: "var(--grey3)",
          grey4: "var(--grey4)",
        }
      },
      backgroundImage: {
        "red-pattern": "url('/imgs/red-bg.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
