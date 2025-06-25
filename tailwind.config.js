module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        caramel: '#8B6F47',
        sage: '#A8B5A2',
        cream: '#F5E9D6',
        pastelPink: '#F4C7C3',
      },
      fontFamily: {
        script: ['Sacramento', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}