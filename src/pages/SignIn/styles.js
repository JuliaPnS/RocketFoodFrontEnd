import styled from "styled-components"; 

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    @media (min-width: 1000px) {

        > h1 {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
            font-family: 'Poppins', sans-serif;
            font-weight: 700;

            display: flex;
            align-items: center;
            gap: 1.19rem;

            margin-left: 9.62rem;
        }

    }
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;   

    text-align: center;

    margin: 0 auto;


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
        margin-top: .5rem;

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


    @media (min-width: 1000px) {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};
        border-radius: 1rem;


        padding: 4rem;
        height: 38.81rem;

        margin-top: 5.63rem;

        > h2 {
        display: flex;
        align-items: center;
        gap: .6rem ;

        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
        font-family: 'Poppins', sans-serif;
        font-weight: 500;

        margin-bottom: 4.56rem;
        padding: 4rem 4rem 0;
    }
}


`;