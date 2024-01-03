import { Container } from './styles';

export function Input ({icon:Icon, value, ...rest}) {
    return(
        <Container>
            {Icon && <Icon/>}
            <input
            value={value}
            {...rest} />
       
            

        </Container>
    )
};