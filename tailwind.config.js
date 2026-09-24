/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F5FBEC',
          100: '#EBF6D3',
          200: '#D8EEAA',
          300: '#BEE47A',
          400: '#A2D54F',
          500: '#86C33A',
          600: '#6AA326',
          700: '#54801F',
          800: '#3F6116',
          900: '#2C4A0F',
          950: '#1B2F0A',
        },
        pine: {
          800: '#1A2B23',
          900: '#101F18',
          950: '#0B1712',
        },
        cream: {
          DEFAULT: '#F9FBF4',
          light: '#FFFFFF',
          panel: '#EDF5DC',
          border: '#DDE8C2',
        },
        gold: {
          50: '#EFF6DD',
          100: '#EAF6D0',
          200: '#D8EEAA',
          300: '#B6DB57',
          400: '#A2D54F',
          500: '#86C33A',
          600: '#6AA326',
          700: '#3F6116',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px -2px rgba(22, 42, 10, 0.06)',
        'elevated': '0 14px 30px -12px rgba(22, 42, 10, 0.12)',
        'glow': '0 0 25px rgba(134, 195, 58, 0.3)',
      },
    },
  },
  plugins: [],
}