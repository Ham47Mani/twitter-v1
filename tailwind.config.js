/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444D",
          300: "#202E3A",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162D40",
          900: "#15202B",
        }
      },
      animation: {
        "spin-fast": "spin .5s linear infinite !important"
      }
    },
  },
  plugins: [],
  important: true,
  darkMode: 'class'
}

