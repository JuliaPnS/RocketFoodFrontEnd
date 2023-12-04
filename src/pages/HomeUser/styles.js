import styled from 'styled-components';
import imgsubheader from '../../assets/imgsubheader.png';

export const Container = styled.div`
    > .subHeader {
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
        border-radius: 0.18231rem;

        display: flex;
        align-items: center;

        margin: 2.85rem 1rem 0 1.88rem;

        > section {

        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT_WHITE_300};
        font-family: 'Poppins', sans-serif;
        
        h1 {
            font-weight: 600;
            font-size: 1.12rem;

            margin: 2.25rem 0.7 0.19rem;
        }

        p {
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 1.05rem;
        }
    }  
}
 
`;

export const ImgSubHeader = styled.div`
    background-size: contain;

`;

