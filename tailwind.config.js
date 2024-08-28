/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        khand: ["var(--font-khand)"],
        // inter: ["var(--font-inter)"],
      },
    },
    colors: {
      darkGreen: "rgb(var(--darkgreen) / <alpha-value>)",
      tan: "rgb(var(--tan) / <alpha-value>)",
      white: "rgb(var(--white) / <alpha-value>)",
    },
  },
  plugins: [],
};
