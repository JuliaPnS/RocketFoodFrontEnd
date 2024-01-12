import styled from 'styled-components';


export const Container = styled.div`

       > .subHeaderBig {
            position: relative;

            display: flex;
            align-items: center;

            width: 100%;
            
            img {
                position: absolute;
                z-index: 1;

               height: 19rem;
            }

            section {
                width: 100%;
                height: 16.25rem;

                display: flex;
                flex-direction: column;
                
                z-index: -2;

                color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
                font-family: 'Poppins', sans-serif;

                border-radius: 0.18231rem;

                background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));                


                margin: 8.25rem 7.75rem;
                padding: 5.5rem 6.5rem 7.5rem;
 
                p {
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 1.05rem;
                    margin-left: 37.37rem;
                }

                h1 {
                    font-weight: 600;
                    font-size: 2.5rem;
                    margin-left: 37.37rem;

                }

            }
       }
       
       @media (min-width: 320px) {
            > .subHeader {

            img {
                position: absolute;
                z-index: 1;

                width: 10rem;
                height: 6.55rem;
            }

            > section {
                
                display: flex;
                flex-direction: column;
                align-items: start;
                height: 6.5rem;
                z-index: -2;

                margin: 2.75rem 1rem 0 2.5rem;
                padding-left: 9rem;
                padding-top: .5rem;

                height: 6.5rem;

                color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
                font-family: 'Poppins', sans-serif;

                border-radius: 0.18231rem;

                background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));                


                h1 {
                font-weight: 600;
                font-size: .9rem;

            }

                p {
                    font-weight: 400;
                    font-size: 0.6rem;
                    line-height: .8rem;
                }
            }

            }
            
       }

       @media (width: 425px) {
            > .subHeader {
                section {
                    padding-top: 1.2rem;
                    padding-right: .1rem;
                    margin-right: 2rem;
                    height: 6.5rem;

                    h1 {
                    font-weight: 600;
                    font-size: .9rem;

                    margin-bottom: .5rem;

                    text-align: start;

                    }

                    p {
                        font-weight: 400;
                        font-size: 0.6rem;
                        line-height: .8rem;
                    }
                }
            }
        }

`;