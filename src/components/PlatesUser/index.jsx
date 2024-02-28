import { PiPlus, PiMinus, PiHeart } from 'react-icons/pi';
import { useNavigate } from "react-router-dom";


import MediaQuery, { useMediaQuery } from 'react-responsive';

import { Container } from './styles';
import { ButtonMin } from '../ButtonMin';


export function PlatesUser({ icon: Icon, image, data, ...rest }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/platesdetails/${data.id}`);
    }

    return (
        <Container {...rest}>

            {Icon && <Icon />}
            <MediaQuery minWidth={1440}>
                <PiHeart />
                <img src={data.image} alt="Imagem do prato" onClick={handleClick} />
                <h3 onClick={handleClick} >{data.title}</h3>
                <h4>{data.description}</h4>
                <p>R$ {data.price}</p>

                <div className="input">
                    <PiMinus />
                    <input
                        type='number'
                        placeholder='01'
                    />

                    <PiPlus />
                </div>
                <ButtonMin to={`/platesdetails/${data.id}`} title='incluir' />
            </MediaQuery>

            <MediaQuery maxWidth={1439}>
                <PiHeart />

                <img src={data.image} alt="Imagem do prato" to={`/platesdetails/${data.id}`} />
                <h3 to={`/platesdetails/${data.id}`} >{data.title}{" >"} </h3>
                <p>R${data.price}</p>
                <div className="input">
                    <PiMinus />
                    <input
                        type='number'
                        placeholder='01'
                    />

                    <PiPlus />

                </div>
                <ButtonMin to={`/platesdetails/${data.id}`} title='incluir'></ButtonMin>

            </MediaQuery>

        </Container>
    )
}

