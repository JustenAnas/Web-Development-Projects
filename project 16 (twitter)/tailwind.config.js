/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    container: {
      center: true, // This will ensure the container is centered
      padding: '8rem', // Optional: customize padding if needed
      screens: {}, // Removes the default max-widths
    },
    extend: {},
  },
  plugins: [],
}
 