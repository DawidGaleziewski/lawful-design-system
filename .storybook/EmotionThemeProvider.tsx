import React from "react";
import { ThemeProvider } from "@emotion/react";
import { lawfulTheme } from "../theme/lawful/theme";

const EmotionThemeProvider = (storyFn) => (
  <ThemeProvider theme={lawfulTheme}>{storyFn()}</ThemeProvider>
);

export default EmotionThemeProvider;