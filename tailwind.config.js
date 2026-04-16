/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#1A2A47',
          accent: '#9DEBFF',
          dark: '#0F1C31',
          card: '#152238',
          border: '#1E3358',
        }
      },
      backgroundImage: {
        'sidebar-gradient': 'linear-gradient(90deg, #9DEBFF 0%, #1A2A47 100%)',
        'btn-gradient': 'linear-gradient(90deg, #9DEBFF 23.08%, #1A2A47 91.35%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
