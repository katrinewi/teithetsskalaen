import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      light: {
        text: "#040316",
        background: "#FBFBFE",
        primary: "#7A6D8D",
        secondary: "#E6A865",
        accent: "#580085",
        accentHover: "#8A00D0",
      },
      dark: {
        text: "#EAE9FC",
        background: "#010104",
        primary: "#7F7292",
        secondary: "#9A5B19",
        accent: "#D37AFF",
        accentHover: "#B158DD",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
