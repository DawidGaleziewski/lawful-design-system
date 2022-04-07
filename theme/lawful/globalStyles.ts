import { css } from "@emotion/react";

export const lawfulGlobalStyles = css`
  html {
    font-size: 10px;

    /* Open sans */
    @font-face {
      font-family: "Open Sans";
      src: url("./fonts/open_sans/static/OpenSans/OpenSans-Bold.ttf");
      font-weight: 700;
    }

    @font-face {
      font-family: "Open Sans";
      src: url("./fonts/open_sans/static/OpenSans/OpenSans-Regular.ttf");
      font-weight: 400;
    }

    /* Martel */
    @font-face {
      font-family: "Martel";
      src: url("./fonts/martel/Martel-Black.ttf");
      font-weight: 900;
    }
    @font-face {
      font-family: "Martel";
      src: url("./fonts/martel/Martel-Bold.ttf");
      font-weight: 700;
    }
    @font-face {
      font-family: "Martel";
      src: url("./fonts/martel/Martel-Regular.ttf");
      font-weight: 400;
    }

    /* Montserrat */
    @font-face {
      font-family: "Martel";
      src: url("./fonts/montserrat/static/Montserrat-Medium.ttf");
      font-weight: 500;
    }
  }
`;
