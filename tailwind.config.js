/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "dash-682": {
          "72.5%": { opacity: 0 },
          to: { "stroke-dashoffset": "0" },
        },
      },
      animation: {
        "dash-682": "dash-682 1s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
