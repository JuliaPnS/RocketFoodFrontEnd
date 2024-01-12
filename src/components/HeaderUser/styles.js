import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    top: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: 7.12rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};

    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
                        
    margin-bottom: 2.25rem;

    @media (min-width: 425px) {
        svg {
            margin-right: 1rem;
            margin-left: 1.75rem;
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    a:hover {
        transition: 0.2s;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
    }

    h1 {
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        font-size: 1.32269rem;

        display: flex;
        align-items: center;
        gap: .5rem;

        svg {
            path {
                fill: #065E7C;
            }

            margin-right: 0.5rem;
            width: 1.53;
            height: 1.53;

        }
    }

    > .receiptNumber {

        position: relative;

        svg {
            margin-left: 2rem;
            margin-right: 0;
        }

        input {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
            text-align: center;

            border-radius: 6.1875rem;
            border: none;
            background: ${({ theme }) => theme.COLORS.BUTTON_TOMATO_100};

            width: 1.25rem;
            height: 1.25rem;

            margin-right: 1.75rem;
            margin-left: -0.6rem;

            position: absolute;

            &::placeholder {
                color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
                font-family: 'Roboto', sans-serif;

            }
        }

    }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;

    }

    @media (max-width: 375px) {

    svg {
        margin-right: 0rem;
        margin-left: 1rem;
        width: 1.53rem;
        height: 1.53rem;
    }  

    h1 {
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        margin: 0 2rem;

        display: flex;
        align-items: center;
        gap: .3rem;

        svg {
            margin-right: 1rem;
            margin-left: 1.75rem;
            width: 1.53rem;
            height: 1.53rem;
        }
    }

    > .receiptNumber {

    position: relative;

    svg {
        margin-left: 1rem;
        margin-right: 1.75rem;
    }

    input {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
        text-align: center;

        border-radius: 6.1875rem;
        border: none;
        background: ${({ theme }) => theme.COLORS.BUTTON_TOMATO_100};

        width: .9rem;
        height: .9rem;

        margin-right: 1.75rem;
        margin-left: -2.2rem;

        position: absolute;
    }

    }


    }
`;

