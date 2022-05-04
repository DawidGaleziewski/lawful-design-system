import { type } from "os";
import { orange, blue, green, red, neutral, gradient } from "./colors";
import { typeScale, fontfamily, fontWeight } from "./typography";

const fontHeight = {
    1100: "6.5rem",
    1000: "5rem",
    900: "4.5rem",
    800: "3.2rem",
    700: "3rem",
    600: "2.8rem",
    500: '2.4rem',
    400: '2rem',
}


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
  radius: {
    100: "0.5rem",
    700: "3.7rem",
  },
  typography: {
    mainHeader: {
      size: typeScale.mainHeader,
      family: fontfamily.primary,
      weight: fontWeight.black,
      height : fontHeight[1100]
    },
    sectionHeader: {
      size: typeScale.sectionHeader,
      family: fontfamily.primary,
      weight: fontWeight.bold,
      height : fontHeight[1000]
    },
    subHeader1: {
      size: typeScale.subHeader1,
      family: fontfamily.primary,
      weight: fontWeight.bold,
      height : fontHeight[800]
    },
    subHeader2: {
      size: typeScale.subHeader2,
      family: fontfamily.secondary,
      weight: fontWeight.medium,
      height : fontHeight[700]
    },
    h5: {
      size: typeScale.h5,
      family: fontfamily.primary,
      weight: fontWeight.bold,
       height : fontHeight[500]
    },
    buttonDefault: {
      size: typeScale.button,
      family: fontfamily.tertiary,
      weight: fontWeight.bold,
      height : fontHeight[600]
    },
    paragraph: {
      size: typeScale.paragraph,
      family: fontfamily.tertiary,
      weight: fontWeight.normal,
       height : fontHeight[400]
    },
  },
};

export type ILawfulTheme = typeof lawfulTheme;
