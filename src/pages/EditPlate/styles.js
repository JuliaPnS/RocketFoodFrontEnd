import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};

    .frame {
        margin: 0.68rem 2rem 3.32rem;

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

        h1 {
            
            font-size: 2rem;
            font-weight: 500; 
        }

    > .image {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

            margin-bottom: 2rem;

            border-radius: .5rem;

            display: flex;
            align-items: center;
            gap: .5rem;
            
            padding: 0.75rem 2rem;

            p {
                font-size: 0.875rem;
                font-weight: 500;
            } 
            
            svg {
                width: 1.2rem;
                height: 1.2rem;
            }


            input {
                display: none;
                width: 100%;
                }

            a {
                font-size: 0.87rem;
            }

            
            label {
                margin-top: 0.5rem;
            }


        
        }
        

    > .category {
            display: flex;
            align-items: center;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

            margin-bottom: 2rem;

            border-radius: .5rem;
            
            svg {
               margin-right: 1rem;
               width: 1.2rem;
               height: 1.2rem;

               cursor: pointer;
            }

            select {
            width: 100%;

            padding: 1rem;
            background: transparent;


            border: none;

            color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_400};
            font-size: 0.875rem;

            option {
                color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
            }

            -webkit-appearance: none;
        }
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

    > .ingredients {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_400};
        font-family: 'Roboto', sans-serif;
   
        .tagsIngredients {
            width: 100%;
            height: 3rem;

            margin-top: .5rem;

            display: flex;
            align-items: center;
            gap: 1.6rem;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
            border-radius: .5rem;

            padding: 1.4rem 3.2rem 1.4rem 1.4rem;

            
        }
    }

        textarea {
            margin-bottom: 1.5rem;
        }

    > .buttons {
        display: flex;
        gap: 2rem;
    }

    @media (min-width: 1440px) {
        > .buttons {
            margin-left: 52.4rem;

            font-size: 0.875rem;
            font-weight: 500;
            text-align: center;

            width: 10.75rem;
            
            .delete {
                width: 8.43rem;
            }

        }
       
    }

    > .buttons .delete {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_800};
    }

    > .sectionOne {
        display: flex;
        gap: 3rem;

        .firstChild {

            > .image {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
            
            width: 14.31rem;

            margin-bottom: 2rem;

            border-radius: .5rem;

            display: flex;
            align-items: center;
            gap: .5rem;
            
            padding: 0.75rem 2rem;

            label {
                font-size: 0.875rem;
                font-weight: 500;

                margin: 0;
                padding:0.2rem;

                cursor: pointer;
            } 
            

            p {
                font-size: 0.875rem;
                font-weight: 500;
            } 
            
            svg {
                width: 1.2rem;
                height: 1.2rem;
            }


            input {
                display: none;
                width: 100%;
                }
            }
        }

        > .secondChild {
            width: 27.18rem;
        }
    
        > .thirdChild {
            > .category {
            display: flex;
            align-items: center;

            width: 22.75rem;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

            margin-bottom: 2rem;

            border-radius: .5rem;
            
            svg {
               margin-right: 1rem;
               width: 1.2rem;
               height: 1.2rem;

               cursor: pointer;
            }

            select {
                width: 100%;

                padding: 1rem;
                background: transparent;


                border: none;

                color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_400};
                font-size: 0.875rem;

    

                -webkit-appearance: none;
            }
        }
    }
}

    > .sectionTwo {
        display: flex;
        gap: 2rem;
        align-items: flex-end;
        
        > .ingredients {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_400};
        font-family: 'Roboto', sans-serif;
   
        .tagsIngredients {
            width: 52.31rem;
            height: 3rem;

            margin-top: .5rem;

            display: flex;
            align-items: center;
            gap: 1.6rem;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
            border-radius: .5rem;

            padding: 1.4rem 3.2rem 1.4rem 1.4rem;

            
        }
    }

    .fourthChild {
        width: 15.68rem;
    }
}
}

@media (min-width: 1440px) {
    .frame {
        margin: 5.94rem 7.75rem;
        width: 70rem;

        h1 {
            margin: 1.5rem;
        }
    }
}

@media (max-width: 1024px) {
    
    > .buttons {
            font-size: 0.875rem;
            font-weight: 500;
            text-align: center;

            width: 8.43rem;

        }

        .frame {
            .ingredients {
   
            .tagsIngredients {
                width: 100%;
                height: 100%;

                display: flex;
                flex-wrap: wrap;
                justify-content:center;

                align-items: center;

                padding: 1.4rem 1.4rem 1.4rem 1.4rem;
       
            }
        }
    }
}
`;