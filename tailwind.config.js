module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,jsx}",
     ],
     darkMode: 'class',
     theme: {
       extend: {
         colors: {
           cream: 'var(--cream)',
           caramel: 'var(--caramel)',
           sage: 'var(--sage)',
           pastelPink: 'var(--pastelPink)',
         },
         fontFamily: {
           script: ['Caveat', 'cursive'],
           sans: ['Poppins', 'sans-serif'],
         },
       },
     },
     plugins: [],
   }