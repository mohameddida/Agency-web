/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
        "4xl": "1800px",
        custom: "2000px",
      },
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
