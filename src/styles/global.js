import { createGlobalStyle  } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

    }

    :root {
        font-size: 62,5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_400};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        outline: none;

    }
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
       filter: brightness(0.9);
    }
`;
