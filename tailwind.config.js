module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#b8b8ff',
        color2: '#2b2d42', 
        color3: '#4895ef', 
        'light-bg': '#eef0f2',
        'dark-bg': '#2d3142',
        'dark-text': '#353535',
        'light-text': '#fffcf2',
      },
      fontFamily: {
        header: ['Unbounded', 'serif'],
        subheader: ['Courier Prime', 'serif'],
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