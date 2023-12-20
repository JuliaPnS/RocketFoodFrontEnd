import styled from 'styled-components';


export const Container = styled.div`

       > .subHeader {
            position: relative;

            display: flex;
            align-items: center;

            width: 100%;
            

            img {
                position: absolute;
                z-index: 1;

                margin-right: 0.37rem;
            }

            section {
                width: 100%;
                height: 6.5rem;

                display: flex;
                flex-direction: column;
                
                z-index: -2;

                color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
                font-family: 'Poppins', sans-serif;

                border-radius: 0.18231rem;

                background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));                


                margin: 2.75rem 1rem 0 2.25rem;
                padding-left: 9.56rem;
                padding-top: 2rem;
 
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
       }      
`;