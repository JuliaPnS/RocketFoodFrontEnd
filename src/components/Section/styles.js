import styled from 'styled-components';

export const Container = styled.div`
    .children {
        /* display: flex; */
        /*flex-direction: row;  */
        align-items: center;
     
    }


    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.125rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

        margin: 3.87rem 0 1.5rem 23rem;
    }

    @media (min-width: 1440px) {
        h2 {
            font-size: 2rem;
        }
    }

    @media (max-width: 1024px) {
        h2 {
            margin: 3.87rem 0 1.5rem 2rem;
        }
    }

`;
