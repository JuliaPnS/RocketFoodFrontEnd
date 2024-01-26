import { IoIosArrowBack } from 'react-icons/io';
import { PiPlus, PiMinus, PiReceiptLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';


import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from '../../service/api';

import { Container } from './styles';
import { HeaderUser } from '../../components/HeaderUser';
import { HeaderUserDesktop } from '../../components/HeaderUserDesktop';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ButtonBig';
import { IngredientsInfos } from '../../components/IngredientsInfos';

import Image from '../../assets/plates/image1.png';

export function PlateInfosUser() {

    const [data, setData] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        async function fectShowPlate() {
            const response = await api.get(`/plates/${id}`);
            setData(response.data);
        }

        fectShowPlate();
    }

    )

    return (
        <Container>
            <MediaQuery minWidth={1440}>
                <HeaderUserDesktop />

                <div className='plateInfosDesktop'>
                    <Link to='/'><IoIosArrowBack />voltar</Link>
                    {
                        data &&
                        <div className="plate">
                            <img src={data.image} alt="Imagem do prato" />
                            <section>
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>


                                <div className='ingredientsInfosDesktop'>
                                    {
                                        data.ingredients.map(ingredient => (
                                            <IngredientsInfos
                                                key={String(ingredient.id)}
                                                data={ingredient.name} />
                                        ))

                                    }
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
                                        data={`R$${data.price}`}

                                    />
                                </div>
                            </section>
                        </div>
                    }
                </div>

            </MediaQuery>
            <MediaQuery maxWidth={1439}>
                <HeaderUser />
                {
                    data &&
                    <div className='plateInfos'>
                        <Link to='/'><IoIosArrowBack />voltar</Link>

                        <img src={data.image} alt="Imagem do prato" />

                        <section>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>

                            <div className='ingredientsInfos'>
                                {
                                    data.ingredients.map(ingredient => (
                                        <IngredientsInfos
                                            key={String(ingredient.id)}
                                            data={ingredient.name} />
                                    ))

                                }
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
                                data={`R$${data.price}`}

                            />

                        </div>

                    </div>
                }
            </MediaQuery>
            <Footer />

        </Container>
    )
}