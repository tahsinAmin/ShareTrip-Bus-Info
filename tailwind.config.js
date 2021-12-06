module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3062D0",
        "primary-light": "#4471D5",
        "g-l": "#EAEAEA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
