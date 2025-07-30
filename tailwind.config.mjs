/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        islamic: {
          green: '#2e7d32',
          'green-light': '#4caf50',
          'green-dark': '#1b5e20',
          gold: '#ffc107',
          'gold-light': '#fff350',
          'gold-dark': '#ff8f00',
          cream: '#f5f5dc',
          brown: '#8d6e63',
          'brown-light': '#a1887f',
          'brown-dark': '#5d4037'
        }
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}