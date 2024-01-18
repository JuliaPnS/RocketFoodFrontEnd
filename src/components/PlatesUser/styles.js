import styled from "styled-components";

export const Container = styled.div`

    padding: 1.5rem;
    margin-left: 1.5rem;

    position: relative;
    width: 13.12rem;
    height: 18.25rem;

    background: ${({ theme })  => theme.COLORS.BACKGROUND_BLACK_200};

    border: 1px solid #000204;
    border-radius: 0.5rem;

    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem ;

    img {
        width: 5.5rem;
        height: 5.5rem;

        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

    }  
    
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_CAKE_200};
    }

    > svg {
        position: absolute;

        right: 1rem;
        top: 1rem;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

        width: 1.5rem;
        height: 1.5rem;

    }
    svg:hover {
        fill: ${({ theme }) => theme.COLORS.BUTTON_TOMATO_100};
        cursor: pointer;
    }


    > .input {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

        display: flex;
        flex-direction: row;
        gap: 0.88rem;

        input {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
            text-align: center;

            border: none;
            background: transparent;

            width: 1.5rem;

            
        }
       
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }


    > button {
        height: 2rem;
        width: 10.125rem;

        border-radius: 0.3125rem;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        font-weight: 500;

    }



`;