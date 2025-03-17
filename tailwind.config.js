/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        black: {
          base: "#0000",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #34245D, #313266, #36405E)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
