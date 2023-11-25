import { createGlobalStyle  } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_400}
    }
`;