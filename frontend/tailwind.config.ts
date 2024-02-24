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
        text: "#090C0A",
        background: "#F9FBFA",
        primary: "#78A189",
        secondary: "#AEC7C2",
        accent: "#73BDB9",
        accentHover: "#5c9794",
      },
      dark: {
        text: "#F3F6F4",
        background: "#040605",
        primary: "#5E876F",
        secondary: "#38514C",
        accent: "#418B87",
        accentHover: "#346f6c",
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
