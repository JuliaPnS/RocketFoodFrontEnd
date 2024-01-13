import { IoIosArrowBack } from 'react-icons/io';
import { PiPlus, PiMinus, PiReceiptLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';


import { Container } from './styles';
import { HeaderUser } from '../../components/HeaderUser';
import { HeaderUserDesktop } from '../../components/HeaderUserDesktop';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ButtonBig';
import { IngredientsInfos } from '../../components/IngredientsInfos';

import Image from '../../assets/plates/image1.png';

import MediaQuery, { useMediaQuery } from 'react-responsive';



export function PlateInfosUser() {
    return (
        <Container>
            <MediaQuery minWidth={1000}>
                <HeaderUserDesktop />

                <div className='plateInfosDesktop'>
                    <Link to='/'><IoIosArrowBack />voltar</Link>

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

                            <div className='infosDesktop'>
                                <div className='input'>
                                    <PiMinus size={27} />
                                    <input
                                        type='number'
                                        placeholder='01'
                                    />
                                    <PiPlus size={27} />
                                </div>

                                <Button
                                    icon={PiReceiptLight}
                                    title='pedir '

                                    data={{
                                        price: 'R$25,00'
                                    }}

                                />
                            </div>
                        </section>
                    </div>
                </div>

            </MediaQuery>
            <MediaQuery maxWidth={950}>
                <HeaderUser />
                <div className='plateInfos'>
                    <Link to='/'><IoIosArrowBack />voltar</Link>

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

                    </section>

                    <div className='infos'>

                        <div className='input'>
                            <PiMinus size={27} />
                            <input
                                type='number'
                                placeholder='01'
                            />
                            <PiPlus size={27} />
                        </div>

                        <Button
                            icon={PiReceiptLight}
                            title='pedir '

                            data={{
                                price: 'R$25,00'
                            }}

                        />
                    </div>

                </div>
            </MediaQuery>
            <Footer />

        </Container>
    )
}