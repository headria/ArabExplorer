// #region Global Imports
import { DefaultTheme } from "styled-components/macro";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
  colors: {
    ...common.colors,
    toggleBorder: "#556678",
    gradient: "linear-gradient(#091236, #1E215D)",
    headerBg: "#1A1C22",
    cardsBg: "#1A1C22",
    textColor: "#FFFFFF",
    dodgerBlue: "#0062CC",
  },
};

export { dark };
