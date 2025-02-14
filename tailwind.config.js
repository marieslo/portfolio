module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#8a7f58',
        color2: '#7c8c9b', 
        color3: '#006bb6', 
        'color-light': 'radial-gradient(ellipse farthest-corner at right top, #c1b99c 0%, #b29f7f 60%)',
        'color-dark': 'radial-gradient(ellipse farthest-corner at right top, #6e3a21 0%, #60322b 60%)',
        'light-bg': '#f4f4f4', 
        'light-text': '#2d2d2d',
        'dark-bg': '#1a2a3a',
        'dark-text': '#d1d1d1',
      },
      fontFamily: {
        header: ['"Unbounded"', 'serif'],
        bodytext: ['"Prompt"', 'serif'],
      },
      borderRadius: {
        DEFAULT: '2rem',
      },
      borderColor: {
        DEFAULT: '#fcfcfc',
      },
    },
  },
  plugins: [],
};