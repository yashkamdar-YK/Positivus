/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#B9FF66',
        secondary: '#191A23',
        tertiary: '#F3F3F3',
      },
    },
  },
  plugins: [],
}

