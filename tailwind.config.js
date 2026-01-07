/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'folkehjelp': {
          'zuccini': '#033520',      // Mørk grønn
          'green': '#01ab4d',         // Hovedfarge (Green Haze)
          'pink': '#c49384',          // Oriental Pink
          'dark': '#033520',          // Alias for zuccini
          'primary': '#01ab4d',       // Alias for hovedfarge
          'accent': '#c49384',        // Alias for pink
        },
      },
      fontFamily: {
        'folkehjelp': ['Folkehjelp Sans', 'sans-serif'],
        'folkehjelp-cond': ['Folkehjelp Sans Cond', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
