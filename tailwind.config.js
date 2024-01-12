const colors = {
  'green-primary': '#00875F',
  'green-secondary': '#00B37E',
  'red-primary': '#AA2834',
  'red-secondary': '#F75A68',
  'black-primary': '#121214',
  'black-secondary': '#00B37E',
  'black-terciary': '#29292E',
  'black-fourth': '#323238',
  'gray-primary': '#7C7C8A',
  'gray-secondary': '#C4C4CC',
  'gray-terciary': '#E1E1E6',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: colors,
      backgroundColor: colors,
      borderColor: colors,
    },
  },
  plugins: [],
};
