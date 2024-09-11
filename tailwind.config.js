/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#00b96b",
        secondary: "#9333ea",
      },
      fontFamily: {
        // sans: ["Inter", "sans-serif"], // Custom font
        // serif: ["Merriweather", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
