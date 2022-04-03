import "@emotion/react";
import { ILawfulTheme, lawfulTheme } from "./theme/lawful/theme";

declare module "@emotion/react" {
  export interface Theme extends ILawfulTheme {}
}

// declare module "@emotion/styled" {
//   export interface Theme {
//     color: {
//       primary: string;
//       positive: string;
//       negative: string;
//     };
//   }
// }
