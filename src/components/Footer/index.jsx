import { Container } from './styles';
import Logo from '../../assets/logo.svg';

export function Footer() {

    return(
        <Container>
            <img src={Logo} alt="Logo Food Explorer" />
            <h2>food explorer</h2>
            <h3>© 2023 - Todos os direitos reservados</h3>
        </Container>
        
    )
    
}