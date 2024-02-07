import { create } from "@storybook/theming/create";

import neuroLogo from "./assets/neuro-logo.svg";

export default create({
  base: "dark",
  brandTitle: "Neuro logo",
  brandUrl: "https://www.neurotech.com.br/",
  brandImage: neuroLogo,
  brandTarget: "_self",
  fontBase: "'Poppins', sans-serif",
});
