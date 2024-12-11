/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
    },
    extend: {
      colors: {
        beige: "#f1d4b3",
      },
    },
  },
  plugins: [],
};
