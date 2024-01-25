import { PiPlus, PiMinus } from 'react-icons/pi';


import { Container } from './styles';
import { ButtonMin } from '../ButtonMin';


export function PlatesUser({ icon: Icon, image, data, ...rest }) {
    return (
        <Container {...rest}>

            {Icon && <Icon />}
            <MediaQuery minWidth={1440}>

                <img src={data.image} alt="Imagem do prato" />
                <h3>{data.title}</h3>
                <h4>{data.description}</h4>
                <p>{data.price}</p>

                <div className="input">
                    <PiMinus />
                    <input
                        type='number'
                        placeholder='01'
                    />

                    <PiPlus />
                </div>
                <ButtonMin to='/plates' title='incluir' />
            </MediaQuery>
            <MediaQuery maxWidth={1439}>
                <Link to='/platesadmin/:id'><PiPencilSimpleLight /></Link>
                <img src={data.image} alt="Imagem do prato" />
                <h3>{data.title}{" >"}</h3>
                <p>R$ {data.price}</p>
                <div className="input">
                    <PiMinus />
                    <input
                        type='number'
                        placeholder='01'
                    />

                    <PiPlus />
                </div>

            </MediaQuery>

        </Container>
    )
}

