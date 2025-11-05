/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  // Safelist classes that may be generated dynamically or used in templates
  safelist: [
    'text-4xl', 'md:text-5xl', 'lg:text-6xl',
    'pt-32', 'h-20', 'hidden', 'md:flex',
    'bg-gradient-to-b', 'from-blue-50', 'to-white'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}