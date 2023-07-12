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
    },
  },
  plugins: [],
};
