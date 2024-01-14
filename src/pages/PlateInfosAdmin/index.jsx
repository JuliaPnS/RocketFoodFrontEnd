import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';


import { Container } from './styles';
import { HeaderAdminDesktop } from '../../components/HeaderAdminDesktop';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ButtonBig';
import { IngredientsInfos } from '../../components/IngredientsInfos';

import Image from '../../assets/plates/image1.png'

export function PlateInfosAdmin() {

    return (
        <Container>
            <MediaQuery minWidth={1000}>
                <HeaderAdminDesktop />
                <div className='plateInfosDesktop'>
                    <Link to='/admin'><IoIosArrowBack />voltar</Link>
                    <div className="plate">
                        <img src={Image} alt="Imagem do prato" />
                        <section>
                            <h1>Salada Ravanello</h1>
                            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                            <div className='ingredientsInfosDesktop'>
                                <IngredientsInfos title='alface' />
                                <IngredientsInfos title='cebola' />
                                <IngredientsInfos title='pão naan' />
                                <IngredientsInfos title='penino' />
                                <IngredientsInfos title='rabanate' />
                                <IngredientsInfos title='tomate' />
                            </div>
                            <Button to='/edit/:id' title='Editar Prato' className='edit' />
                        </section>

                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={990}>
                <HeaderAdminDesktop />
                <div className='plateInfos'>
                    <Link to='/admin'><IoIosArrowBack />voltar</Link>
                    <div className="plate">
                        <img src={Image} alt="Imagem do prato" />
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
                            <Button to='/edit/:id' title='Editar Prato' className='edit' />
                        </section>

                    </div>
                </div>
            </MediaQuery>

            <Footer />

        </Container>
    )
};