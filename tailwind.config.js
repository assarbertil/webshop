const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      mauve: {
        12: "#EDEDEF",
      },
      sky: {
        1: "#0C1820",
        2: "#071D2A",
        3: "#082636",
        11: "#2EC8EE",
      },
      red: {
        10: "#F2555A",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
