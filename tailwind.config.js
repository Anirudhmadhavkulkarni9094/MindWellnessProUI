/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'bgblue': '#D6F8FF' // Define a custom background color
      },
      fontFamily : {
        "navbar" : "Inknut Antiqua",
        "home" : "Inria Sans"
      }
    },
  },
  plugins: [],
}
