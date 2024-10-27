import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE6161",
        secondary: "#552100",
        content: "#333333",
        contentGray: "#E5E5E5",
        donut: {
          one: "#FFD9D9",
          two: "#FFA3A3",
          three: "#FE6161",
        },
      },
    },
  },
  plugins: [],
};

export default config;
