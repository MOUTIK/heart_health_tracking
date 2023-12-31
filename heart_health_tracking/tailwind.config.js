/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "Wall_Back":"url('./assets/images/bgWhite.png')"
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
