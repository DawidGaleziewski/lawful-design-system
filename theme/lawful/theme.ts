import { type } from "os";
import { orange, blue, green, red, neutral, gradient } from "./colors";
import { typeScale, fontfamily, fontWeight } from "./text";

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
    transparent: "rgba(255,255,255, 0)",
    status: {
      success: green[500],
      danger: red[500],
      alert: orange[600],
      active: blue[400],
      disabled: neutral[700],
    },
  },
  space: {
    base: 0.8
  },
  radius: {
    100: "0.5rem",
    700: "3.7rem",
  },
  text: {
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
    h5: {
      size: typeScale.h5,
      family: fontfamily.primary,
      weight: fontWeight.bold,
    },
    buttonDefault: {
      size: typeScale.button,
      family: fontfamily.tertiary,
      weight: fontWeight.bold,
    },
    paragraph: {
      size: typeScale.paragraph,
      family: fontfamily.tertiary,
      weight: fontWeight.normal,
    },
  },
};

export type ILawfulTheme = typeof lawfulTheme;
