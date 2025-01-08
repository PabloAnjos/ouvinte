/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'background': '#222222',
      'text-white': '#FFFFFF',
      'accent-green': '#5CC242',
      'secondary-background': '#2B2B2B',
      'inputs-color': '#3F3F3F',
      'secondary-text': '#D6D6D6',
      'tertiary-text': '#949494',
    },
  },
  plugins: [],
}

