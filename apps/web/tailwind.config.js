/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "custom-sm": { min: "470px" },
      "header-sm": { min: "520px" },
      "grid-pool-sm": { min: "640px" },
      "grid-pool-md": { min: "960px" },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-orange": "#DF5E00",
        "secondary-orange": "rgba(193, 81, 1, 0.10)",
        "tab-color": "rgba(193, 81, 1, 0.40)",
        "darker-orange": "#B84D00",
        "primary-gray": "#B7B7B7",
        "light-black": "#303030",
        "light-gray": "#656565",
        "light-gray-border": "#EEE",
        "blue-gray": "#454A75",
        "primary-blue": "#2775CA",
        "light-orange": "#F7931A",
        "purple-border": "#8A92B2",
        "yellow-border": "#F2C12A",
        "neon-border": "#FCFC03",
        "gray-text": "#797979",
        "gray-border": "#9DA8BE",
        "primary-purple-background": "#8027CB",
        "purple-text": "#8027CB",
        "secondary-yellow-background": "#C48000",
        "unselected-gray-background": "#EEEEEE",
        "dark-text": "#5A637A",
        "yellow-text": "#FEBD58",
      },
      fontFamily: {
        nunito: ['"Nunito Sans", sans-serif'],
        spline: ['"Spline Sans Mono", monospace'],
        gilroy: ["var(--font-gilroy)"],
        arial: ["Arial", "sans-serif"],
      },
      borderColor: {
        "primary-orange": "rgba(214, 90, 0, 0.85)",
      },
      borderWidth: {
        0.2: "0.2px",
        0.3: "0.3px",
      },
    },
  },
  plugins: [],
};
