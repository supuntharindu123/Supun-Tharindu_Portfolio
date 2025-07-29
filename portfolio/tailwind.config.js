/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
        heading: ["Oswald", "Montserrat", "SF Pro Display", "sans-serif"],
        body: ["Roboto", "Montserrat", "system-ui", "sans-serif"],
        accent: ["Bebas Neue", "Oswald", "sans-serif"],
        display: ["Anton", "Oswald", "sans-serif"],
        mono: [
          "Source Code Pro",
          "Fira Code",
          "Monaco",
          "Cascadia Code",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
