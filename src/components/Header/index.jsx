import { Container } from './styles';
import { PiReceiptLight, PiListLight  } from 'react-icons/pi';
import Logo from '../../assets/logo.svg';

export function Header() {
    return(
        <Container>
            <PiListLight />
            
            <h1>
            <img src={Logo} alt="Logo Food Explorer" />
            food explorer</h1>
            <PiReceiptLight />
        </Container>
    )
}