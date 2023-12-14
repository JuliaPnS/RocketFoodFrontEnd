import { Container } from './styles';

export function ButtonMin({icon:Icon, data, title, ...rest }) {
    return (
   
        <Container type='button'  {...rest}>
            {Icon && <Icon />}
            {title}
            {data && data.price}
                  
        </Container>
    );
}

