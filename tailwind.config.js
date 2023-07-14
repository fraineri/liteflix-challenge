/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
        "bebas-neue": ["var(--font-bebas-mueue)"],
      },
      colors: {
        "dark-grey": "#242424",
        aqua: "#64EEBC",
      },
      letterSpacing: {
        widest: ".25em",
      },
      keyframes: {
        "side-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "side-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        }
      },
      animation: {
        "side-in": "side-in 0.5s ease-in-out forwards",
        "side-out": "side-out 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
