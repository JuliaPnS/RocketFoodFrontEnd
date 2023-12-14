import styled from "styled-components"; 

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;


export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;   

    text-align: center;

    margin: auto;


    > h1 {
        display: flex;
        align-items: center;
        gap: .6rem ;

        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
        margin-bottom: 4.56rem;
    }

   > label {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_400};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        margin-bottom: .5rem;

        display: flex;
        align-items: start;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: .87rem;
        line-height: 1.5rem;

        margin-top: 2rem;
    }



`;