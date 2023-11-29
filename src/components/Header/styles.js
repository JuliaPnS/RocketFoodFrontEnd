import styled from 'styled-components';

export const Container = styled.div`
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
        font-size: 1.32269rem;

        margin: 0 6rem;

        display: flex;
        align-items: center;
        gap: .5rem;
    }

    > svg {
        margin: 0 1.7rem;
    }
`;