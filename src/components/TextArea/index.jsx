import { Container } from './styles';

export function TextArea ({value, defaultValue, ...rest}) {
    return(
        <Container value={defaultValue} {...rest}>
            { value }
        </Container>
    )
};