/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: { highlightColor: "#FCB814", subtextColor: "#8C8C8C" } },
  },
  plugins: [],
};
