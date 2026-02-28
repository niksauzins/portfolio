/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        accent: '#e94560',
        bgDark: '#0a0f1c',
        bgCard: '#111827',
        lightText: '#ccd6f6',
        dimText: '#8892b0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
