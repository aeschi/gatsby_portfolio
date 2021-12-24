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
}

h1 {
  font-size: 4.8rem;
  font-family: 'PPRadioGrotesk Bold';
}

h2 {
  font-size: 3.6rem;
  font-family: 'PPRadioGrotesk Bold';
}

h6{
  font-size: 0.8rem;
}

p{
  font-size: 1.6rem;
}

// COLORS

:root{
    --background-green: #57ab80;
}

`;

export default GlobalStyle;