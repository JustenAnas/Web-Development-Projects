/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // ✅ App Router files
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // ✅ If you’re using Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Components
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
