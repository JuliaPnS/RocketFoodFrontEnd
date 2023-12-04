import { PiHeart, PiPlus, PiMinus} from 'react-icons/pi';

import { Container } from './styles';
import { Button } from '../../components/Button';


export function Plates({data}) {
    return (
        <Container >

            <PiHeart />

                <h3>{data.title}</h3>
                <p>{data.price}</p>
                
                <div className='input'>
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