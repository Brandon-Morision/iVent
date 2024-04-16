/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backGround: '#E5E5E5',
        fontColor: '#000000',
        buttonColor: 'bg-gradient-to-r from-red-600 to-red-900',
        buttonTextcolor: '#FFFFFF',
        logoColor: 'bg-gradient-to-r from-red-600 to-red-900'
      },
      fontFamily: {
        regularfont: ['Poppins-Regular', 'sans-serif'],
        mediumfont: ['Poppins-Medium', 'sans-serif'],
        boldfont: ['Poppins-Bold', 'sans-serif']
      }
    },
  },
  plugins: [],
}

