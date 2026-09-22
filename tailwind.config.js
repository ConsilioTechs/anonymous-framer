/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        paper: "#f8f7f2",
        ember: "#ff2b1d",
        wine: "#860b0d",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
