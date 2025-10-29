/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  
  theme: {
    extend: {
      colors: {
      primary: 'var(--color-primary)',
      background: 'var(--color-background)',
      text: 'var(--color-text)',
    }
    },
  },
  plugins: [],
  safelist: [
  'hover:bg-[color:var(--card-hover)]',
  'bg-[color:var(--card-bg)]',
  'text-[color:var(--card-text)]',
  'dark:cursor-play-dark'
]
}

