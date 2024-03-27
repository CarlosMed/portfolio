import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { max: "375px" },
    },
    extend: {
      colors: {
        olive: "#425047",
        tan: "#B5987D",
        eggshell: "#EDEDEB",
      },
    },
  },
  plugins: [],
};
export default config;
