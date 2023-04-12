/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayF4: "#F4F4F4",
        grayFC: "#FCFCFC",
        primary: "#11142D",
        gray80: "#808191",
      },
    },
  },
  plugins: [],
};
