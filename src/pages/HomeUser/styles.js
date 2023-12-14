import styled from 'styled-components';


export const Container = styled.div`
       > .subHeader {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
            font-family: 'Poppins', sans-serif;

            background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
            border-radius: 0.18231rem;

            margin: 2.75rem 1rem 0 1.87rem;
            
       }  
       
       
       section {
                display: flex;
                flex-direction: column;
                
                p {
                    font-weight: 400;
                    font-size: 0.75rem;
                    line-height: 1.05rem;
                }

                h1 {
                    font-weight: 600;
                    font-size: 1.12rem;

                }

            }
`;