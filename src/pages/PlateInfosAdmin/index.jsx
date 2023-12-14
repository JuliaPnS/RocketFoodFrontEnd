import { IoIosArrowBack } from 'react-icons/io';
import { Container } from './styles';

import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ButtonBig';
import { IngredientsInfos } from '../../components/IngredientsInfos';

export function PlateInfosAdmin() {
    return (
        <Container>
            <HeaderAdmin />
            <div className='plateInfos'>
                <p><IoIosArrowBack />voltar</p>

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

                               
            <Button title='Editar Prato' />
           
            </div>
            

            <Footer />

        </Container>
    )
}