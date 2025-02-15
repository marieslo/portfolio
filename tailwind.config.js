module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#bdd5ea',
        color2: '#577399', 
        color3: '#FF6700', 
        'light-bg': '#bdd5ea',
        'dark-bg': '#3f5785',
        'dark-text': '#495867',
        'light-text': '#ccdbdc',
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