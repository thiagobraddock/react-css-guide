import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    background-color: #8ecae6;
  }
  
  body {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    overflow-y: auto;
    overflow-x: auto;
    background-color: #F7F8FA;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:500;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle;