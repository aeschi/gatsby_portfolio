import { createGlobalStyle } from "styled-components";
import PPRadioGroteskWoff2 from "../fonts/PPRadioGrotesk-Bold.woff2";
import PPRadioGroteskWoff from "../fonts/PPRadioGrotesk-Bold.woff";

const GlobalStyle = createGlobalStyle`

// FONT
@font-face {
  font-family: 'PPRadioGrotesk Bold';
  src: url(${PPRadioGroteskWoff2}) format('woff2'),
       url(${PPRadioGroteskWoff}) format('woff');
}

html {
  font-size: 10px;
  font-family: "Helvetica", sans-serif;
  line-break: normal;
}

h1, h2 {
  font-family: 'PPRadioGrotesk Bold';
}

// COLORS

:root{
    --background-green: #57ab80;
    --alert: #0075FF;
    --red: #FF5767;
    --dark-blue: #3b5866;
    --yellow: #FFFA69;
    --blue: #107CB3;
}

`;

export default GlobalStyle;