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
      darkGreen: "#313C35",
      tan: "#DCB999",
      white: "#FCFFFD",
    },
  },
  plugins: [],
};
