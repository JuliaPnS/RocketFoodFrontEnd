import styled from 'styled-components';

export const Container = styled.div`
       
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};

    .frame {
        margin: 0.68rem 2rem 3.32rem;

        p {    
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 140%;
        font-family: 'Poppins', sans-serif;


        display: flex;
        align-items: center;



        svg {
            width: 2rem;
            height: 2rem;

        }   
    }

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            font-weight: 500; 
    }
    
        label {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_400};
            font-family: 'Roboto', sans-serif;
            font-weight: 400;

            margin-bottom: .5rem;
            margin-top: 1.5rem;

            display: flex;
            align-items: start;


        }

        textarea {
            margin-bottom: 1.5rem;
        }
    }

   

`;