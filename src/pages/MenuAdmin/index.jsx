import { PiMagnifyingGlassLight, PiX } from "react-icons/pi";
import { Container } from './styles';

import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'

export function MenuAdmin() {
    return (
        <Container>
            <div className="header">
                <PiX />
                <h1>Menu</h1>
            </div>

                <div className="frame">
                <Input
                placeholder='Busque por pratos ou ingredientes'
                type='text'
                icon={PiMagnifyingGlassLight}
                />
                <h2>Novo Prato</h2>
                <h2>Sair</h2>
            </div>

            <Footer />

        </Container>
    )
}