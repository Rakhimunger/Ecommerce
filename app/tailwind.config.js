/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aboutprimary: "#0ea5e9", // Correct hex code with a single '#'
        aboutsecondary: "#FBBF24",
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
  plugins: [],
};
