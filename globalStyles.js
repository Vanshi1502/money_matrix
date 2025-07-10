// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    margin: 0;
    min-height: 100vh;
    color: #1a202c;
    letter-spacing: 0.02em;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;

