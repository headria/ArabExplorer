import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none !important;
  }
  body {
    font-family: ${({ theme }) => theme.colors.bodyFont1} !important;
    font-weight: 300;
    direction: ltr;
    margin: 0  ;
    padding: 0 ;
    background-color: ${({ theme }) => theme.colors.background};
    text-align: left;
  }
  html {
    scroll-behavior: smooth;
    line-height: 1.15;
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.colors.bodyFont1} !important;
  }
  input,
  textarea,
  p {
    font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
  }
  h1 {
    font-size: 38px;
    font-weight: 800;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 26px;
  }
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: 18px;
  }
  h6 {
    font-size: 14px;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 26px;
  }
  b,
  strong {
    font-weight: bolder;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  nav {
    display: block;
  }
  a {
    text-decoration: none !important;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  svg {
    overflow: hidden;
    vertical-align: middle;
  }
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  .fixedposition {
    overflow: hidden;
    padding-right: 17px;
  }
  .custom-scollbar {
    scrollbar-color: ${({ theme }) => theme.colors.primary} rgba(0, 0, 0, 0.1);
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      border-radius: 10px;
      width: 5px;
      height: 8px;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: white;
    }
  }
`;

export default GlobalStyle;
