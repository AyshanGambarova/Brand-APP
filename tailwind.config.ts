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
        "blue-1": "rgba(99,165,255,255)",
        "blue-2": "rgba(175, 211, 255, 1)",
        "blue-3": "rgba(192, 223, 253, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
