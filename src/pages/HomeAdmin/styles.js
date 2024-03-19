import styled from 'styled-components';


export const Container = styled.div`
      > .subHeaderDesktop {
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


                margin: 8.25rem 0;
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

        @media (min-width: 690px) {
            #arrowForward {
                right: .1rem;
                z-index: 1;
            }

            #arrowBack {
                left: 1.7rem;
                z-index: 1;
            }
    
            .arrow {
                position: absolute;

                background-color: transparent;
                border: none;
                
                svg {
                    width: 2rem;
                    height: 2rem;

                    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
                }
            }

            .plates {
                width: 75.9rem;
                margin: 0 auto;
                justify-content: center;
            
            }


            > .subHeaderDesktop {
                section {
                    margin: 0 7.75rem;
                }
            }
            
            .frame {
                .carousel {
                    margin: 0 35.75rem;
                    display: flex;
                    align-items: center;
    
                    svg:hover {
                        cursor: pointer;
                        transform: scale(1.1);
                        transition: 0.2s;
                    }
            }
           
        }

    }

        @media (width: 768px) { 
            .plates {
                width: 45rem;
                margin: 0 auto;
            
            }
            .arrow {
                svg {
                    width: 1.2rem;
                    height: 1.2rem;

                    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
                }
            }
            
        
        }
    
`;
