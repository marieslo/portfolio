export default {
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#90a2d9',
        color2: '#efd9ba',
        color3: '#874524',
        'color-light': 'radial-gradient(ellipse farthest-corner at right top, #efd9ba 0%, #efd9ba 60%)',
        'color-dark': 'radial-gradient(ellipse farthest-corner at right top, #874524 0%, #874524 60%)',
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
      spacing: {
        headerHeight: '2rem',
      },
    },
  },
  plugins: [],
};