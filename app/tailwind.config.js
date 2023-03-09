/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
      },
      fontSize: {
        base: "1rem",
        lg: "1.125rem",
      },
      colors: {
        primary_100: "#40A3C0",
        primary_80: "#80D9FF",
        primary_60: "#CFE8FF",
        black_gray: "#444",
        default_gray: "#777",
      },
    },
  },
  plugins: [],
};
