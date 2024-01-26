import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    width: 100%;
    height: 6.5rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};

    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
                        
    margin-bottom: 2.25rem;
    padding: 1.5rem 7.69rem;
    
    > svg {
        margin-right: 0;
        width: 2rem;
        height: 2rem;
    } 

    svg:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.2s;
    }

    h1 {
        font-weight: 700;
        font-size: 1.5rem;
        font-family: 'Roboto', sans-serif;

        text-align: center;

        display: flex;
        align-items: center;
        gap: 0.6rem;
        
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

    > .inputSearch {
        width: 36.12rem;
    }

    > .buttonReceipt {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        line-height: 1.5rem;
        font-weight: 500;



    }



`;

