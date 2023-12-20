import { PiPlus, PiMinus, PiPencilSimpleLight} from 'react-icons/pi';
import { Link } from 'react-router-dom';


import { Container } from './styles';



export function PlatesAdmin({data, image, ...rest}) {
    return (
        <Container {...rest}>

            <Link to='/platesadmin/:id'><PiPencilSimpleLight /></Link>
                    <img src={image} alt="Imagem do prato" />
                <h3>{data.title}</h3>
                <p>{data.price}</p>
                
                <div className="input">
                    <PiMinus /> 
                    <input
                        type='number'
                        placeholder='01'
                    />

                    <PiPlus/>
                </div>

        </Container>
    )
}

