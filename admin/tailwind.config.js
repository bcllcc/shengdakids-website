/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        'primary-light': '#FFF3ED',
        success: '#22C55E',
        danger: '#EF4444',
      }
    },
  },
  plugins: [],
}
