import { PiMagnifyingGlassLight, PiX } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../service/api';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'

export function MenuUser() {

    const [search, setSearch] = useState([]);
    const [plates, setPlates] = useState([]);

    useEffect(() => {
        async function fetchPlates() {
            const response = await api.get(`/menu?title=${search}`);
            setPlates(response.data);
        }

        fetchPlates();
    }, [search]);

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
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Link to='/'><h2>Sair</h2></Link>
            </div>

            <Footer />

        </Container>
    )
}