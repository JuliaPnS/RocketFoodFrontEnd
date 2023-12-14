import styled from 'styled-components';

export const Container = styled.span`
    height: 2rem;

    background-color: ${({ theme })  => theme.COLORS.BACKGROUND_DARK_1000};

    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
    font-weight: 500;
    font-size: 0.875rem;

    padding: 0.62rem 1rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;


`;

