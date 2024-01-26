import styled from 'styled-components';

export const Container = styled.div`

   > .plateInfos {
        width: 19.75rem;

        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
        
        margin: 0 auto;

        img {
            width: 16.5rem;
            height: 16.5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        > a {    
            
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 140%;

            display: flex;
            align-items: center;

            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

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
            justify-content: center;
            


    }
}

    > .infos {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

        display: flex;
        flex-direction: row;
        gap: 1rem;

        
    > .input {
            display: flex;
            align-items: center;
            gap: 0.28rem;

        input {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
            text-align: center;

            border: none;
            background: transparent;

            width: 1.5rem;

            }
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

}

@media (width: 320px) {
    .plateInfos {
        width: 19.75rem;

        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
        
        margin: 1rem;

        > .infos {
        margin: 2rem;
        
        font-size: 0.8rem;
        }

    }
}

@media (min-width: 1000px) {
    > .plateInfosDesktop {
        width: 19.75rem;

        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
        
        margin: 1.5rem 7.62rem  ;

        img {
            width: 16.5rem;
            height: 16.5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        > a {    
            
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 140%;

            display: flex;
            align-items: center;

            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

            svg {
                width: 2rem;
                height: 2rem;
            }
            
        }

    > .plate {
        
        display: flex;
        flex-direction: row;
        gap: .75rem;

        margin: 6.25rem 7.6rem 15.8rem;


        > section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.75rem;

            margin-bottom: 3rem;
            margin-left: 2.99rem;

            h1 {
                font-size: 1.69006rem;
                font-weight: 500;
            }

            p {
                font-size: 1.01406rem;
                font-weight: 400;
                line-height: 140%;
            }

            .ingredientsInfosDesktop {
                display: flex;
                text-align: center;
                align-items: center;
                gap: 0.75rem;
                
                }


            > .infosDesktop {
            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};

            display: flex;
            flex-direction: row;
            gap: 1rem;

            
            > .input {
                    display: flex;
                    align-items: center;
                    gap: 0.28rem;

                input {
                    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
                    text-align: center;

                    border: none;
                    background: transparent;

                    width: 1.5rem;

                    }
                }
            }

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }
            }
        }

    }
}  
`;