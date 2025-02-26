module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#3772ff',
        color2: '#2b2d42', 
        color3: '#7692ff', 
        'light-bg': '#f7f4ea',
        'dark-bg': '#343A40',
        'dark-text': '#353535',
        'light-text': '#f7f4ea',
      },
      fontFamily: {
        header: ['Unbounded', 'serif'],
        subheader: ['Anonymous Pro', 'serif'],
        quote: ['Montagu Slab', 'serif'],
        bodytext: ['Funnel Display', 'serif'],
      },
      borderRadius: {
        DEFAULT: '2rem',
      },
      borderColor: {
        DEFAULT: '#748cab',
      },
    },
  },
  plugins: [],
};