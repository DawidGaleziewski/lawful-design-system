import { css } from "@emotion/react";

export const lawfulGlobalStyles = css`
  html {
    font-size: 10px;

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
  }
`;
