module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
     extend: {
      FontFamily: {
        sans  : ['Poppins', 'sans-serif'],
     },
     grisTemplateColums: {
      '70/30': '70% 28%',
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
   }
  }