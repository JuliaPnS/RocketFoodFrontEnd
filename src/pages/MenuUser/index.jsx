import { PiMagnifyingGlassLight, PiX } from "react-icons/pi";
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'

export function MenuUser() {
    return (
        <Container>
            <div className="header">
                <Link to='/'><PiX /></Link>
                <h1>Menu</h1>
            </div>

                <div className="frame">
                <Input
                placeholder='Busque por pratos ou ingredientes'
                type='text'
                icon={PiMagnifyingGlassLight}
                />
                <Link to='/'><h2>Sair</h2></Link>
            </div>

            <Footer />

        </Container>
    )
}