// #region Global Imports
import { BaseTheme } from "styled-components/macro";
import { rgba } from "polished";
// #endregion Global Imports

const common: BaseTheme = {
  colors: {
    transparent: "transparent",
    darkGrey: "#282C34",
    blackGrey: "#20232A",
    white: "#FFFFFF",
    primary: "#022640",
    secondary: "#0668af",
    desertLight: "#ffee76",
    desertGold: "#ffcb57",
    desertDark: "#ffbd48",
    danger: "#e70e02",
    success: "#02b91e",
    gray100: "#f8f9fa",
    gray200: "#e9ecef",
    gray300: "#dee2e6",
    gray400: "#ced4da",
    gray500: "#adb5bd",
    gray600: "#6c757d",
    gray700: "#495057",
    gray800: "#343a40",
    gray900: "#212529",
    textDark: "#3b3b3b",
    textGray: "#5c5c5c",
    borderColor: "#e2e2e2",
    background: "#f0eee7",
    bodyFont1: "'Oswald', sans-serif",
    bodyFont2: "'Raleway', sans-serif",
    iconFont: "Material Design Icons",
    boxshadow: "0 5px 30p " + rgba("#3b3b3b", 0.8),
  },
};

export { common };
