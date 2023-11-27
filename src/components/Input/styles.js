import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    border-radius: .5rem;

    display: flex;
    align-items: center;
    
   
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

    margin-bottom: 2rem;

    > input {
        height: 3rem;
        padding: 0.75rem 0.87rem;
       
        border: 0;
        
        background: transparent;
        
        &:placeholder {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_500};
        }     
    }

   
`;