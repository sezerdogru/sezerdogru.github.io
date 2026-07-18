/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- .tsx uzantılı dosyaları taraması için burası kritik!
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brand: {
          bg: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
          primary: "#2563EB",
          secondary: "#0EA5E9",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
