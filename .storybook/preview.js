import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { ThemeProvider } from "@emotion/react";
import { lawfulTheme } from "../theme/lawful/theme";
import EmotionThemeProvider from "./EmotionThemeProvider";
// addParameters({
//   backgrounds: [{ name: "Lawful Theme", value: "#ffffff", default: true }],
// });

// addDecorator(withContexts(contexts));
addDecorator(EmotionThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
