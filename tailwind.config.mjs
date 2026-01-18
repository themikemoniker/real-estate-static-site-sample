/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Luxury dark theme
        gold: {
          50: '#fffef5',
          100: '#fef9e7',
          200: '#fdf2c4',
          300: '#fce896',
          400: '#f9d654',
          500: '#d4af37', // Primary gold
          600: '#b8960f',
          700: '#9a7b0a',
          800: '#7d6208',
          900: '#665006',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#1a1a1a', // Primary dark
          900: '#0d0d0d', // Deepest dark
          950: '#050505',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
