/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ce6a46",

          secondary: "#f4028f",

          accent: "#ffa8ef",

          neutral: "#161B1D",

          "base-100": "#fff",

          info: "#3DD6F5",

          success: "#49E4CD",

          warning: "#B46D08",

          error: "#EC8C79",

          word: "#757575;",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
