import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    border-radius: .5rem;

    display: flex;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

    margin-bottom: 2rem;

    > input {
        width: 100%;
        height: 3rem;
        padding: 1.4rem 3.2rem 1.4rem 1.4rem;
       
        border: 0;
        
        background: transparent;

        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
        
        &:placeholder {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_500};
        }    
        
  
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_400};
        margin-left: 1.4rem;
    }

   
`;