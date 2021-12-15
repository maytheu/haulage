module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: { body: ["Poppins"] },
    letterSpacing: {
      widest: ".15em",
    },
    extend: {
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography")
  ],
};
