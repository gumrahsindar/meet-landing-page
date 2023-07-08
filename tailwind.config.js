/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    fontSize: {
      sm: ['16px', '26px'],
      base: ['18px', '26px'],
      lg: ['32px', '36px'],
      xl: ['40px', '44px'],
      '2xl': ['48px', '48px'],
      '3xl': ['64px', '64px'],
    },
    extend: {
      fontFamily: {
        redHat: ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        'clr-teal': '#4D96A9',
        'clr-lightBlue': '#8FE3F9',
        'clr-purple': '#855FB1',
        'clr-pink': '#D9B8FF',
        'clr-black': '#28283D',
        'clr-gray': '#87879D',
        'clr-white': '#FAFAFA',
      },
    },
  },
  plugins: [],
}
