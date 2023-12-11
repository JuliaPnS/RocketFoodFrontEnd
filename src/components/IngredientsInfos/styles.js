import styled from 'styled-components';

export const Container = styled.span`
    background-color: ${({ theme })  => theme.COLORS.BACKGROUND_DARK_1000};

    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
    font-weight: 500;
    font-size: 0.875rem;

    padding: 0.25rem 0.5rem;
    border-radius: 0.3125rem;

`;

