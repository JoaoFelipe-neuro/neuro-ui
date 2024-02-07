import {
  colors,
  radii,
  fontSizes,
  fontWeights,
  fonts,
  space,
} from "@neuro-ui/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      fontFamily: fonts,
      borderRadius: radii,
      spacing: space,
    },
  },
  plugins: [],
};
