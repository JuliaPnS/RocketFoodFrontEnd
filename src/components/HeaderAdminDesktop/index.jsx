import { Container } from './styles';

import { PiReceiptLight, PiMagnifyingGlassLight } from 'react-icons/pi';
import { RxExit } from "react-icons/rx";

import { Input } from '../Input';
import { Button } from '../ButtonBig';

export function HeaderAdminDesktop() {
    
    return (
        <Container>
            <h1>
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 39 44"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Polygon 1"
                        d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" />
                </svg>
                food explorer
                <span>admin</span>
            </h1>
            <div className="inputSearch">
                <Input
                    placeholder='Busque por pratos ou ingredientes'
                    type='text'
                    icon={PiMagnifyingGlassLight}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="buttonReceipt">
                <Button
                    icon={PiReceiptLight}
                    title="Pedidos"

                />
            </div>

            <RxExit />




        </Container>
    )
}