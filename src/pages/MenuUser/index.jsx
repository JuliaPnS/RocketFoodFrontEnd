import { PiMagnifyingGlassLight, PiX } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../service/api';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'
import { PlatesUser } from '../../components/PlatesUser'

export function MenuUser() {

    const [search, setSearch] = useState("");
    const [plates, setPlates] = useState([]);

    useEffect(() => {
        async function fetchPlates() {
            if (search) {
                const response = await api.get(`/plates?search=${search}`);

                setPlates(response.data)

            } else {
                setPlates([])
            }

        }

        fetchPlates()

    }, [search]);
    console.log(search)

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
                {
                    plates.map(plate => (
                        <PlatesUser
                            key={String(plates.id)}
                            data={plate}
                        />
                    ))

                }
                <Link to='/'><h2>Sair</h2></Link>
            </div>

            <Footer />

        </Container>
    )
}