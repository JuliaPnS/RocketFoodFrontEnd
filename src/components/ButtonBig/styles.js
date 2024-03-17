import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled(Link)`
    width: 100%;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.BUTTON_TOMATO_100};

    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};

    border: none;
    border-radius: .5rem;

    padding: 0.75rem 2rem;

    font-family: 'Poppins', sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.34rem;

    > svg {
        width: 1.35rem;
        height: 1.35rem;
    }

  
    &:disabled {
        opacity: 0.5;
        
    }

@media(max-width: 375px) {
    padding: 0.75rem 1rem;

}

`;