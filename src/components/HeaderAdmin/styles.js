import styled from 'styled-components';

export const Container = styled.div`
    top: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: 7.12rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};

    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
                        
    margin-bottom: 2.25rem;

    h1 {
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        font-size: 1.32rem;

        display: flex;
        align-items: center;
        gap: .5rem;

        span {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_CAKE_200};
            font-size: 0.7rem;
            font-weight: 400;
        }

        svg {
            path {
                fill: #065E7C;
            }

            margin-right: 0.5rem;
            width: 1.53;
            height: 1.53;

        }
    } 

    @media (min-width: 425px) {
        svg {
            margin-right: 5rem;
            margin-left: 1.75rem;
            width: 2rem;
            height: 2rem;
        }
    }

    @media (min-width: 320px) {
        svg {
            margin-right: 1rem;
            margin-left: 1rem;
            width: 2rem;
            height: 2rem;
        }
    }



`;