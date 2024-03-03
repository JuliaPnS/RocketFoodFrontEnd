import { Container } from './styles';
import { PiReceiptLight, PiListLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { api } from '../../service/api';


export function HeaderUser({ setPlates, plates }) {
    if (!setPlates) {
        [plates, setPlates] = useState([]);
    }
    useEffect(() => {
        async function fetchPlates() {

            const response = await api.get(`/plates?search=`);

            setPlates(response.data)
        }

        fetchPlates()
    }, []);

    return (
        <Container>
            <Link to='/menu'>
                <PiListLight />
            </Link>
            <h1>
                <svg
                    width="39"
                    height="44"
                    viewBox="0 0 39 44"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Polygon 1"
                        d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" />
                </svg>
                food explorer</h1>

            <div className='receiptNumber'>
                <PiReceiptLight />
                <input
                    disabled
                    type='number'
                    placeholder='0' />
            </div>

        </Container>
    )
}