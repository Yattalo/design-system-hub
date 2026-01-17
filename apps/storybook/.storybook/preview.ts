import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        brutalist: "brutalist",
        vaporwave: "vaporwave",
        cyberdeck: "cyberdeck",
        hologram: "hologram",
        bubblegum: "bubblegum",
      },
      defaultTheme: "brutalist",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
