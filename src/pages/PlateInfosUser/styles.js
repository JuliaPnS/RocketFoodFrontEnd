import styled from 'styled-components';

export const Container = styled.div`

   > .plateInfos {
        width: 19.75rem;

        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
        
        margin: 1rem 3.5rem 2.1rem;

        img {
            width: 16.5rem;
            height: 16.5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        > a {    
            
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 140%;

            display: flex;
            align-items: center;

            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

            svg {
                width: 2rem;
                height: 2rem;
            }
            
        }

    > section {

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.75rem;

        margin-bottom: 3rem;

        h1 {
            font-size: 1.69006rem;
            font-weight: 500;
        }

        p {
            font-size: 1.01406rem;
            font-weight: 400;
            line-height: 140%;
        }

        .ingredientsInfos {
            display: flex;
            
            align-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            


    }
    }

    button {
        width: 100%;
        height: 3rem;
        
        font-size: 0.5915rem;

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

       

        svg {
            width: 1.39rem;
            height: 1.39rem;
            margin-right: 0.34rem;
        }

    }

    > .infos {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

        display: flex;
        flex-direction: row;
        gap: 1rem;

        
    > .input {
            display: flex;
            align-items: center;
            gap: 0.28rem;

        input {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
            text-align: center;

            border: none;
            background: transparent;

            width: 1.5rem;

            }
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

}
`;