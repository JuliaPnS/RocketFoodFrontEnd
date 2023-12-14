import { IoIosArrowBack } from 'react-icons/io';
import { PiPlus, PiMinus, PiReceiptLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';


import { Container } from './styles';

import { HeaderUser } from '../../components/HeaderUser';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ButtonBig';
import { IngredientsInfos } from '../../components/IngredientsInfos';

export function PlateInfosUser() {
    return (
        <Container>
            <HeaderUser />
            <div className='plateInfos'>
                <Link to='/'><IoIosArrowBack />voltar</Link>

                {/*imagem*/}

                <section>
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                 <div className='ingredientsInfos'>
                        <IngredientsInfos title='alface' />
                         <IngredientsInfos title='cebola' />
                         <IngredientsInfos title='pão naan' />
                         <IngredientsInfos title='penino' />
                         <IngredientsInfos title='rabanate' />
                         <IngredientsInfos title='tomate' />
                    </div>
                    
                </section>

                 <div className='infos'>

                    <div className='input'>
                        <PiMinus size={27}/>
                        <input
                            type='number'
                            placeholder='01'
                        />
                        <PiPlus size={27}/>
                    </div>
                               
                    <Button
                        icon={PiReceiptLight}
                        title='pedir ' 

                        data={{
                            price:'R$25,00'}}
                       
                    />
                </div>
                
            </div>
            <Footer />

        </Container>
    )
}