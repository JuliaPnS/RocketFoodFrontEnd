import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 10.75rem;

    padding: 0.88rem;

    border-radius: .5rem;
    border: none;
    resize: none;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_500};
    font-family: 'Roboto', sans-serif;
`;