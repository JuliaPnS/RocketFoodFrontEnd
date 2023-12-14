import { PiMagnifyingGlassLight, PiX } from "react-icons/pi";
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'

export function MenuAdmin() {
    return (
        <Container>
            <div className="header">
            <Link to='/admin'><PiX /></Link>
                <h1>Menu</h1>
            </div>

            <div className="frame">
                <Input
                placeholder='Busque por pratos ou ingredientes'
                type='text'
                icon={PiMagnifyingGlassLight}
                />
                <Link to='/new/:id'><h2>Novo Prato</h2></Link>
                <Link to='/admin'><h2>Sair</h2></Link>
            </div>

            <Footer />

        </Container>
    )
}