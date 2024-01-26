import { PiPencilSimpleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import MediaQuery, { useMediaQuery } from 'react-responsive';

import { Container } from './styles';

export function PlatesAdmin({ data, image, ...rest }) {

    return (
        <Container {...rest}>
            <MediaQuery minWidth={1440}>
                <Link to={`/platesdetails/${data.id}`}><PiPencilSimpleLight /></Link>
                <img src={data.image} alt="Imagem do prato" />
                
                <h3>{data.title}{" >"}</h3>
                <h4>{data.description}</h4>
                <p>R$ {data.price}</p>


            </MediaQuery>

            <MediaQuery maxWidth={1439}>
                <Link to={`/platesdetails/${data.id}`}><PiPencilSimpleLight /></Link>
                <img src={data.image} alt="Imagem do prato" />
                <h3>{data.title}{" >"}</h3>
                <p>R$ {data.price}</p>

            </MediaQuery>
        </Container>
    )
};

