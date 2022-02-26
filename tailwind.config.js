module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        root: "#060606",
        root1: "#1E1F21",
        card: "#4c4c56",
        secondary: "#26262B",
        underline: "#99C2FF",
        border: "#032343",
      },
    },
  },
  plugins: [],
};
