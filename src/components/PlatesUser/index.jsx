import { PiPlus, PiMinus} from 'react-icons/pi';


import { Container } from './styles';
import { ButtonMin } from '../ButtonMin';


export function PlatesUser({icon:Icon, image, data, ...rest}) {
    return (
        <Container {...rest}>

            {Icon && <Icon />}

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
            <ButtonMin to='/plates' title='incluir' />

        </Container>
    )
}

