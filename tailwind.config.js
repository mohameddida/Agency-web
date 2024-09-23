/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/src/assets/homeCover.png')",
      },
      gradientColorStops: {
        "dark-blue": "#1B367C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
