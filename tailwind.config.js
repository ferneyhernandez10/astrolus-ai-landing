/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      colors: {
        gray: {
          50: "#fbf9fa",
          100: "#f6f3f4",
          500: "#6a7282",
          600: "#4a5565",
          700: "#364153",
          800: "#1e2939",
          900: "#101828",
          950: "#030712",
        },
        primary: "#4f39f6",
        purple: {
          400: "#c27aff",
          700: "#8200db",
        },
        cyan: {
          400: "#00d3f3",
        },
        sky: {
          300: "#74d4ff",
          500: "#00a6f4",
        },
        secondary: "#f54a00",
        indigo: {
          100: "#e0e7ff",
          500: "#615fff",
        },
        teal: {
          100: "#cbfbf1",
          600: "#009689",
        },
        info: "#155dfc",
      },
    },
  },
  plugins: [],
};
