import styled from 'styled-components';

export const Container = styled.div` 
   > .plateInfos {

        height: 100vh;
        width: 19.75rem;

        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
        
        margin: 1rem 3.5rem 2.1rem;
    p {    
        
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 140%;

        display: flex;
        align-items: center;

        svg {
            width: 2rem;
            height: 2rem;
        }
        
    }

    > section {

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.75rem;

        margin-bottom: 3rem;

        h1 {
            font-size: 1.69006rem;
            font-weight: 500;
        }

        p {
            font-size: 1.01406rem;
            font-weight: 400;
            line-height: 140%;
        }

        .ingredientsInfos {
            display: flex;
            
            align-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            
    }


    
}
    
    button {
        width: 100%;
        height: 3rem;
        
        font-size: 0.875rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

        display: flex;
        align-items: center;
        justify-content: center;

        }
   

    
}
`;