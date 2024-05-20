/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        vLight: "var(--vLight)",
        light: "var(--light)",
        neutral: "var(--neutral)",
        dark: "var(--dark)",
        vDark: "var(--vDark)"
      }
    },
  },
  plugins: [],
}

