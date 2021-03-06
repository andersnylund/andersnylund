import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';

export const colors = {
  pink: 'hsl(7, 92%, 85.3%)',
  darkPink: 'hsl(7, 92%, 10%)',
  black: 'hsl(0, 0%, 5%)',
  blue: 'hsl(205, 20%, 62%)',
  grey: 'hsl(0, 0%, 20%);'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {    
    font-family: Roboto;
  }
`;

export default GlobalStyle;
