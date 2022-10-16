export const fontfamily = {
  primary: '"Martel", cursive',
  secondary: '"Montserrat", cursive',
  tertiary: '"Open Sans", cursive',
};

export const typeScale = {
  mainHeader: "5.8rem",
  sectionHeader: "4rem",
  subHeader1: "2.4rem",
  subHeader2: "2rem",
  h5: "1.6rem",
  button: "1.4rem",
  mobileMenu: "3rem",
  paragraph: "1.4rem",
  list: "2rem",
  link: "2rem",
};

export const fontWeight = {
  black: 900,
  bold: 700,
  medium: 500,
  normal: 400,
};

const MAJOR_SECOND = 1.125;

//https://sashko.dev/typography-js/ on typescales

const round2dec = (num: number) =>  Math.round((num + Number.EPSILON) * 100) / 100;
const scaleFont = (fontScale: number) => (baseFontSize: number) =>  (index: number) => round2dec(Math.pow(fontScale, index) * baseFontSize);
const scaleMajorSecond = scaleFont(MAJOR_SECOND);
const scaleMajorSecondDesktop = scaleMajorSecond(14);

const rem = (fontSizePX: number) =>  `${fontSizePX/10}rem`;

const generateTypeScale = (scale: (index: number) => number) => ({
    100: rem(scale(-3)),
    200: rem(scale(-2)),
    300: rem(scale(-1)),
    400: rem(scale(0)),
    500: rem(scale(1)),
    600: rem(scale(2)),
    700: rem(scale(3)),
    800: rem(scale(4)),
    900: rem(scale(5)),
    1000: rem(scale(6)),
    1100: rem(scale(7)),
    1200: rem(scale(8)),
    1300: rem(scale(9)),
    1400: rem(scale(10)),
  })

 const majorSecondDesktop = generateTypeScale(scaleMajorSecondDesktop);

 console.log(majorSecondDesktop)
