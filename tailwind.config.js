/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Archivos de tu proyecto
    "./node_modules/flowbite/**/*.js", // Archivos de Flowbite
  ],
  mode: 'aot',
  darkMode: "media", // Modo oscuro habilitado según preferencia del sistema
  theme: {
    extend: {
      // ==== Colores personalizados ====
      colors: {
        // Fondo general
        background: {
          50: "#fff8b1",
        },
        // Colores de texto
        text: {
          titulo: "#8F3800",
          subtitulos: "#8d4402",
          parrafos: "rgb(182 93 0)",
        },
        // Colores de interacción
        enlaces: {
          DEFAULT: "#C66500",
        },
        // Colores decorativos o adicionales
        decorativo: {
          DEFAULT: "#FFC662",
        },
      },

      // ==== Fuentes personalizadas ====
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Fuente principal para textos
        heading: ["Helvetica", "Arial", "sans-serif"], // Opcional: para encabezados
      },

      // ==== Margen de desplazamiento personalizado ====
      scrollMargin: {
        "top-10": "40px",
        "top-20": "80px",
        "top-30": "120px",
      },
    },
  },
  plugins: [require("flowbite/plugin")], // Plugin de Flowbite
  corePlugins: {
    preflight: false, // Desactiva estilos globales problemáticos
  },
};
