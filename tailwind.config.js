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
        4: "#082D41",
        5: "#08354C",
        11: "#2EC8EE",
        12: "#EAF8FF",
      },
      red: {
        4: "#481A1D",
        5: "#541B1F",
        6: "#671E22",
        10: "#F2555A",
        11: "#FF6369",
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
