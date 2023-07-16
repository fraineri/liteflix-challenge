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
        "light-grey": "#919191",
        "dark-grey": "#242424",
        aqua: "#64EEBC",
      },
      letterSpacing: {
        widest: ".25em",
      },
      keyframes: {
        "side-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "side-out-to-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "side-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "side-out-to-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "side-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "side-out-to-bottom": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "side-in-from-left": "side-in-from-left 0.3s ease-in-out forwards",
        "side-out-to-left": "side-out-to-left 0.3s ease-in-out forwards",
        "side-in-from-right": "side-in-from-right 0.3s ease-in-out forwards",
        "side-out-to-right": "side-out-to-right 0.3s ease-in-out forwards",
        "side-in-from-bottom": "side-in-from-bottom 0.3s ease-in-out forwards",
        "side-out-to-bottom": "side-out-to-bottom 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
