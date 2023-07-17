/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "w-tiny": {
          raw: "(max-width: 300px)",
        },
        "h-tiny": {
          raw: "(max-height: 500px)",
        },
        "h-sm": {
          raw: "(max-height: 600px)",
        },
        "h-md": {
          raw: "(max-height: 840px)",
        },
      },
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
        "side-in-from-bottom-to-middle": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "side-out-to-bottom-from-middle": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "side-in-from-left": "side-in-from-left 0.3s ease-in-out forwards",
        "side-out-to-left": "side-out-to-left 0.3s ease-in-out forwards",

        "side-in-from-right": "side-in-from-right 0.3s ease-in-out forwards",
        "side-out-to-right": "side-out-to-right 0.3s ease-in-out forwards",

        "side-in-from-bottom": "side-in-from-bottom 0.3s ease-in-out forwards",
        "side-out-to-bottom": "side-out-to-bottom 0.3s ease-in-out forwards",

        "side-in-from-bottom-to-middle":
          "side-in-from-bottom-to-middle 0.3s ease-in-out forwards",
        "side-out-to-bottom-from-middle":
          "side-out-to-bottom-from-middle 0.3s ease-in-out forwards",

        "fade-in": "fade-in 0.3s ease-in-out forwards",
        "fade-out": "fade-out 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
