import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled(Link)`
    width: 100%;
    height: 2rem;

    background-color: ${({ theme }) => theme.COLORS.BUTTON_TOMATO_100};

    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
    font-family: 'Poppins', sans-serif;

    border: none;
    border-radius: .5rem;

    padding: 0.75rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
        
    }

`;