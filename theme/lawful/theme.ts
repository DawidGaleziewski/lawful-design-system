import { type } from "os";
import { orange, blue, green, red, neutral, gradient } from "./colors";
import { typeScale, fontfamily, fontWeight } from "./typography";

export const lawfulTheme = {
  color: {
    primary: orange[500],
    secondary1: orange[300],
    secondary2: orange[700],
    secondary3: orange[400],
    secondary4: blue[500],
    backgroundDark: blue[700],
    backgroundLight: neutral[100],
    text: blue[700],
    textInverted: neutral[100],
    status: {
      success: green[500],
      danger: red[500],
      alert: orange[600],
      active: blue[400],
      disabled: neutral[700],
    },
  },
  radius: {
    100: "5px",
    700: "37px",
  },
  typography: {
    mainHeader: {
      size: typeScale.mainHeader,
      family: fontfamily.primary,
      weight: fontWeight.black,
    },
    sectionHeader: {
      size: typeScale.sectionHeader,
      family: fontfamily.primary,
      weight: fontWeight.bold,
    },
    subHeader1: {
      size: typeScale.subHeader1,
      family: fontfamily.primary,
      weight: fontWeight.bold,
    },
    subHeader2: {
      size: typeScale.subHeader2,
      family: fontfamily.secondary,
      weight: fontWeight.medium,
    },
    buttonDefault: {
      size: typeScale.button,
      family: fontfamily.tertiary,
      weight: fontWeight.bold,
    },
    paragraph: {
      size: typeScale.paragraph,
      family: fontfamily.tertiary,
    },
  },
};

export type ILawfulTheme = typeof lawfulTheme;
