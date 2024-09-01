/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx, mdx}',  // This covers all files in the app directory, including layout.tsx
    './pages/**/*.{js,ts,jsx,tsx, mdx}',  // This covers all files in the pages directory (that I don't have)
    './components/**/*.{js,ts,jsx,tsx, mdx}',  // If you have components outside the app directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lightImage': "url('/light-background.jpeg')",
        'darkImage': "url('/dark-background.jpeg')",
      },
    },
  },
  plugins: [],
};
