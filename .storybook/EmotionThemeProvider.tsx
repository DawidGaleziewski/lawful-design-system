import React from "react";
import { ThemeProvider, Global } from "@emotion/react";
import { lawfulTheme, lawfulGlobalStyles } from "../theme/lawful";

const EmotionThemeProvider = (storyFn) => (
  <ThemeProvider theme={lawfulTheme}>
    <Global styles={lawfulGlobalStyles} />
    {storyFn()}
  </ThemeProvider>
);

export default EmotionThemeProvider;