const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      mauve: {
        1: "#161618",
        2: "#1c1c1f",
        3: "#232326",
        4: "#28282c",
        5: "#2e2e32",
        6: "#34343a",
        7: "#3e3e44",
        8: "#504f57",
        9: "#706f78",
        10: "#7e7d86",
        11: "#a09fa6",
        12: "#ededef",
      },
      sky: {
        1: "#0c1820",
        2: "#071d2a",
        3: "#082636",
        4: "#082d41",
        5: "#08354c",
        6: "#083e59",
        7: "#064b6b",
        8: "#005d85",
        9: "#68ddfd",
        10: "#8ae8ff",
        11: "#2ec8ee",
        12: "#eaf8ff",
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
  plugins: [require("@tailwindcss/forms")],
};
