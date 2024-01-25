import styled from 'styled-components';

export const Container = styled.div`
       
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_100};
    font-family: 'Poppins', sans-serif;

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
            }

            a {
                font-size: 0.87rem;
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

    @media (min-width: 1440px) {
        > .button {
            margin-left: 59rem;

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
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_800}; ;
    }

    > .sectionOne {
        display: flex;
        gap: 2rem;

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
`;