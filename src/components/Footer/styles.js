import styled from 'styled-components';

export const Container = styled.div`
    bottom: -0;
    position: relative;
    
    width: 100%;
    height: 4.8rem;

    display: flex;
    align-items: center;

    padding: 1.83rem 1.74rem;
    margin-top: 1.5rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};

    h2 {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_700};
        margin-left: .39rem;
        margin-right: 1rem;
        font-size: 0.95388rem;
    }

    h3 {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_200};
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        font-size: 0.75rem;
    }


    > svg {
        path {
        fill: #4D585E;
        }
        
        width: 1.37rem;
        height: 1.7rem;
    }
`;
