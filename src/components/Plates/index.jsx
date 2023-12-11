import { PiHeart, PiPlus, PiMinus} from 'react-icons/pi';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

import { Container } from './styles';
import { Button } from '../../components/Button';


export function Plates({icon:Icon, data, ...rest}) {
    return (
        <Container {...rest}>

            {Icon && <Icon />}

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
            <Button title='incluir' />

        </Container>
    )
}

