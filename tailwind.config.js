/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclui todos os arquivos em src com extensões React/JS
  ],
  theme: {
    extend: {
      fontFamily: {
        normal: ["fontNormal", "sans-serif"], // Fonte personalizada
      },
      colors: {
        "texto": "#222222", // Cor de fundoTexto global
        "customPurple": "#e3b4fa",
      },
    },
  },
  plugins: [],
};
