import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {
      colors: {
        typography: {
          lighter: "#B0BAC9",
          DEFAULT: "#1A1D24",
          dark: "#8594AB",
          error: "#D91B1B"
        },
        gold: {
          lighter: "#E1D2A7",
          DEFAULT: "#B18641",
          dark: "#986A36",
        },
        bg: {
          lighter: "#F6F7F9",
          DEFAULT: "#F5F6F8",
          dark: "#ECEEF2"
        },
        green: {
          DEFAULT: "#3FB950"
        },
        red: {
          DEFAULT: "#E74C3C"
        },
        yellow: {
          DEFAULT: "#F4C542"
        },
        blue: {
          DEFAULT: "#376CC0"
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    plugin(function ({ addVariant }) {
      addVariant("not-read-only", "&:not(:read-only)");
    }),
  ],
};
export default config;
