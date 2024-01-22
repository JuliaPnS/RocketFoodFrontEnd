import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import MediaQuery, { useMediaQuery } from 'react-responsive';

import { useState, useEffect } from 'react';
import { api } from '../../service/api';

import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { HeaderAdminDesktop } from '../../components/HeaderAdminDesktop';
import { Section } from '../../components/Section';
import { PlatesAdmin } from '../../components/PlatesAdmin';

import Image from '../../assets/imgsubheader.png';


export function HomeAdmin() {
    const [plates, setPlates] = useState([]);

    return (

        <Container>
            <MediaQuery minWidth={1440}>
                <HeaderAdminDesktop setPlates={setPlates} plates={plates} />

                <div className='subHeaderDesktop'>
                    <img src={Image} alt="Imagem de macarons" />
                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </div>

                <div className="frameDesktop">
                    {
                        Array.from(Map.groupBy(plates, (plate) => plate.category)).map((result) => {
                            return <div className="sections">
                                <Section title={result[0]}>
                                    <IoIosArrowBack id='arrowBack' className='arrow' />
                                    {
                                        result[1].map(plate => (
                                            <PlatesAdmin
                                                key={String(plate.id)}
                                                data={plate}
                                            />
                                        ))
                                    }

                                    <IoIosArrowForward id='arrowForward' className='arrow' />
                                </Section>
                            </div>
                        })
                    }
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1439}>
                <HeaderAdmin setPlates={setPlates} plates={plates}/>

                <div className='subHeader'>
                    <img src={Image} alt="Imagem de macarons" />
                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </div>

                <div className="frameDesktop">
                    {
                        Array.from(Map.groupBy(plates, (plate) => plate.category)).map((result) => {
                            return <div className="sections">
                                <Section title={result[0]}>
                                    <IoIosArrowBack id='arrowBack' className='arrow' />
                                    {
                                        result[1].map(plate => (
                                            <PlatesAdmin
                                                key={String(plate.id)}

                                                data={plate}


                                            />
                                        ))
                                    }

                                    <IoIosArrowForward id='arrowForward' className='arrow' />
                                </Section>
                            </div>
                        })
                    }
                </div>
            </MediaQuery>
            <Footer />

        </Container>
    )
};