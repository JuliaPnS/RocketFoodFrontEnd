import styled from 'styled-components';

export const Container = styled.div`
    height: 2rem;
    

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.TAG_GRAY_LIGHT_600};

    padding: 0.62rem 1rem;
    border-radius: 0.5rem;

    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.TAG_GRAY_LIGHT_600}` : "none"};

    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
    }
    
    
    .button-add {
        color: ${({ theme }) => theme.COLORS.TAG_GRAY_LIGHT_600};
    }
    

    > input {
        border: none;
        background: transparent;

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        text-align: center;
        width: 4.375rem;

        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.TAG_GRAY_LIGHT_600 : theme.COLORS.COLOR_LIGHT_WHITE_300};

        &::placeholder {
            color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.TAG_GRAY_LIGHT_600 : theme.COLORS.COLOR_LIGHT_WHITE_300}
        }
        
    }


`;

