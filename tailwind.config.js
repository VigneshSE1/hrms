module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#4FAEEF",
        secondary: "#f0f0f0",
        backgroundGray: "#f7f7f7",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
    screens: {
      sm: "520px",
      md: "521px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};
