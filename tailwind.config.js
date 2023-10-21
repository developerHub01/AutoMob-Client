/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      primaryFont: ["Poppins", "sans-serif"],
      headingFont: ["Bebas Neue", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
