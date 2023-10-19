/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/helpers/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/styleguide/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
