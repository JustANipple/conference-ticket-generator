/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        e_inconsolata: ["Inconsolata", "serif"],
      },
      fontWeight: {
        e_regular: 400,
        e_medium: 500,
        e_bold: 700,
        e_extraBold: 800,
      },
      fontSize: {
        e_fontSize_labels: "1.25rem",
      },
      colors: {
        e_white: "#ffffff",
        e_lightGrey: "#d2d1d6",
        e_lightBlue: "#8784a4",
        e_blue: "#4b486a",
        e_darkBlue: "#0c082b",
        e_peach: "#f57261",
        e_darkPeach: "#e16151",
        e_gradientFrom: "#f37362",
        e_gradientTo: "#ffffff",
      },
    },
  },
  plugins: [],
};
