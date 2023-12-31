/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sora: ['Sora'],
  },
  opacity: {
      0: '0',
      20: '0.2',
      30: '0.3',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
  },
  extend: {
      color: {
      },
      fontSize: {
          13: '13px',
          14: '14px',
          16: '16px',
          18: '18px',
          20: '20px',
          24: '24px',
          26: '26px',
          36: '36px',
          40: '40px',
          48: '48px',
          54: '54px',
          72: '72px',
          80: '80px',
      },
  },
  },
  plugins: [],
}
