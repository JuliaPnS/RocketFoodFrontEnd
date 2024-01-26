import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from '../../service/api';

import { Container } from './styles';
import { HeaderAdminDesktop } from '../../components/HeaderAdminDesktop';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ButtonBig';
import { IngredientsInfos } from '../../components/IngredientsInfos';


export function PlateInfosAdmin() {

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
                <HeaderAdminDesktop />
                <Link to='/'><IoIosArrowBack />voltar</Link>
                {
                    data &&
                    <div className='plateInfosDesktop'>

                        <div className="plate" >

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


                                <Button to={`/edit/${id}`} title='Editar Prato' className='edit' />
                            </section>
                        </div>
                    </div>
                }



            </MediaQuery>
            <MediaQuery maxWidth={1439}>
                <HeaderAdmin />
                <Link to='/'><IoIosArrowBack />voltar</Link>
                {
                    data &&
                    <div className='plateInfos'>

                        <div className="plate" >

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


                                <Button to={`/edit/${id}`} title='Editar Prato' className='edit' />
                            </section>
                        </div>
                    </div>
                }

            </MediaQuery>

            <Footer />

        </Container>
    )
};