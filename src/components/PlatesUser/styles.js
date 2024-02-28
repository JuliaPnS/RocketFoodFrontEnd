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

        cursor: pointer;
    }

    img:hover {
        transform: scale(1.09);
        transition: 0.3s;
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

        cursor: pointer;
    } 

    h3:hover {
        font-weight: 635;
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
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.2s;
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

    @media (min-width: 1440px) {
        
        width: 17.31rem;
        height: 28rem;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 0.95rem;


            img {
                width: 11rem;
                height: 11rem;
            }

            svg {
                width: 1.5rem;
                height: 1.5rem;
            }

            svg:hover {
                stroke-width: 10px;
            }

            p {
                font-family: 'Roboto', sans-serif;
                font-size: 2rem;
                font-weight: 400;
            }

            h4 {
                color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_400};
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                font-size: 0.875rem;
            }

            h3 {
                font-size: 1.5rem;
                line-height: 140%;
                width: 16rem;

                text-align: center;
            }
        }


`;