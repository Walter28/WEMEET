/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: '#3E64FF',
          black: '#222B45',
          blue: '#6B779A',
          navActive: '#2F2F2F',
          nav: '#848282'
        },

        fontFamily: {
          ithin: ["Inter-Thin", "sans-serif"],
          isemibold: ["Inter-SemiBold", "sans-serif"],
          iregular: ["Inter-Regular", "sans-serif"],
          imedium: ["Inter-Medium", "sans-serif"],
          ilight: ["Inter-Light", "sans-serif"],
          iextralight: ["Inter-ExtraLight", "sans-serif"]
        }
      },
    },
    plugins: [],
  }

