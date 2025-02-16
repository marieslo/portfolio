module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#D08C60',
        color2: '#A47148', 
        color3: '#B9375E', 
        'light-bg': '#F3D5B5',
        'dark-bg': '#0b2027',
        'dark-text': '#353535',
        'light-text': '#fffcf2',
      },
      fontFamily: {
        header: ['"Unbounded"', 'serif'],
        bodytext: ['"Prompt"', 'serif'],
      },
      borderRadius: {
        DEFAULT: '2rem',
      },
      borderColor: {
        DEFAULT: '#D08C60',
      },
    },
  },
  plugins: [],
};