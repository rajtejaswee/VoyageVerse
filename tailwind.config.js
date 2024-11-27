/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fustat: ["Fustat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Noto_Sans: ["Noto+Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

