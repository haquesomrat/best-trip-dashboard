const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./output/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#F50308",
        secondary: "#1C1C1C",
      },
    },
  },
  plugins: [],
};
