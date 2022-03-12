import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: aileron, sans-serif;
        font-size: 18px;
        font-weight: 300;
        color: #000;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 18px;
        font-weight: 300;
    }
    
    input, button, fieldset {
        font: inherit;
        outline: none;
        border: none;
        background-color: transparent;
    }
    
    button {
        cursor: pointer;
    }

    a {
        font: inherit;
        color: inherit;
    }
`;