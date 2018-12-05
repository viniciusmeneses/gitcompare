import { createGlobalStyle } from 'styled-components';

// Para criar uma estilização global, devemos utilizar o crateGlobalStyle
// Passando o CSS que queremos exportar
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    min-height: 100vh;
    background: #9b65E6;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialised !important;
  }
`;

export default GlobalStyle;
