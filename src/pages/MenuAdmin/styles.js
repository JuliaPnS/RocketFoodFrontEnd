import styled from 'styled-components';

export const Container = styled.div`
       

        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
        

        > .header {
            display: flex;
            align-items: center;
            gap: .4rem;

            width: 100%;
            height: 7.12rem;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};
            
            margin: auto 0;
            
            margin-bottom: 2.25rem;

            

            h1 {
                font-family: 'Roboto', sans-serif;
                line-height: normal;
                font-size:  1.32269rem;
                font-weight: 100;
            }

            svg {
                margin-left: 1.75rem;
            }

        }

        > .frame {
            height: 100vh;
            margin: 3.6rem 2.8rem;

            border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};
            

            h2 {
                font-family: 'Roboto', sans-serif;
                line-height: normal;
                font-size:  1.32269rem;
                font-weight: 100;

                padding: 0.62rem ;

                border-bottom: 1px solid #192227;
            }

        }



`;