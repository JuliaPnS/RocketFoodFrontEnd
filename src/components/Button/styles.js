import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.BUTTON_TOMATO_100};
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
    border: none;
    border-radius: .5rem;

    padding: 0.75rem 2rem;

`;