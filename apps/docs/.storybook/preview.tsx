import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../../../packages/ui/build.css";

import neuroTheme from "./neuroTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: {
        ...neuroTheme,
        ...themes.dark,
      },
      type: "auto",
    },
    backgrounds: {
      default: "dark",
    },
  },
};

export default preview;
