/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      textColor: "#ffe7b9",
      colorFocus: "#ffb833",
      colorHover: "#ffb833",
      bgColor: "#212529",
      bgColorHover: "#37393C",
    },
  },
  plugins: [],
}
