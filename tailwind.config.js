/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: ["./src/**/*.{html,js}" , "./node_modules/flowbite/**/*.js"],
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
