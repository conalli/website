/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#141414",
      },
      screens: {
        xs: "480px",
        short: { raw: "(max-height: 730px)" },
        tall: { raw: "(min-height: 740px) and (max-width: 480px)" },
      },
      gridTemplateColumns: {
        mobileProjects: "repeat(12, minmax(0, 1fr))",
        projects: "repeat(16, minmax(0, 0.5fr))",
      },
      gridTemplateRows: {
        mobileProjects: "repeat(10, minmax(0, 0.25fr))",
        tallMobile: "repeat(12, minmax(0, 0.3fr))",
        projects: "repeat(14, minmax(0, 0.25fr))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in",
      },
    },
  },
  plugins: [],
};
