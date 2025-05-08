/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#DDFF07',
        'qwhite': '#F8F8F8',
        'qdark': '#0C0C0C',
        'qgrey': '#353535',
        'qdarkgrey': '#202020',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'qround': '0.5rem',
      },
      boxShadow: {
        'qshadow': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
} 