import { PiMagnifyingGlassLight, PiX } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from '../../service/api';

import { PlatesAdmin } from '../../components/PlatesAdmin';
import { Container } from './styles';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';


export function MenuAdmin() {

    const [search, setSearch] = useState("");
    const [plates, setPlates] = useState([]);

    useEffect(() => {
        async function fetchPlates() {
            if(search) {
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
                <Link to='/admin'><PiX /></Link>
                <h1>Menu</h1>
            </div>

            <div className="frame">
                <Input
                    placeholder='Busque por pratos ou ingredientes'
                    type='text'
                    onChange={(e) => setSearch(e.target.value)}
                    icon={PiMagnifyingGlassLight}
                />

                {
                    plates.map(plate => (
                        <PlatesAdmin
                            key={String(plates.id)}
                            data={plate}
                            />
                    ))

                }

                <Link to='/new'><h2>Novo Prato</h2></Link>
                <Link to='/admin'><h2>Sair</h2></Link>
            </div>

            <Footer />

        </Container>
    )
};

