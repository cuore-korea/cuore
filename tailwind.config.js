/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#6184d0',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'international-klein-blue': { DEFAULT: '#3B2F9B', 100: '#0c0a1f', 200: '#18133e', 300: '#241d5e', 400: '#30267d', 500: '#3b2f9b', 600: '#5344c5', 700: '#7e73d4', 800: '#a9a1e2', 900: '#d4d0f1' },
        'glaucous': { DEFAULT: '#5F83D3', 100: '#0d1830', 200: '#1a3060', 300: '#274990', 400: '#3561c0', 500: '#5f83d3', 600: '#7f9cdc', 700: '#9fb5e5', 800: '#bfceed', 900: '#dfe6f6' }
      },
      fontFamily: {
        'lato': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
