import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useState, useEffect } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderUser } from '../../components/HeaderUser';
import { HeaderUserDesktop } from '../../components/HeaderUserDesktop';
import { Section } from '../../components/Section';
import { PlatesUser } from '../../components/PlatesUser';

import Image from '../../assets/imgsubheader.png';
import ImageBig from '../../assets/imgsubheaderbig.png';


export function HomeUser() {
    const [plates, setPlates] = useState([]);

    return (
        <Container>
            <MediaQuery minWidth={1440}>
                <HeaderUserDesktop setPlates={setPlates} plates={plates} />

                <div className='subHeaderDesktop'>
                    <img src={ImageBig} alt="Imagem macarons" />

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
                                            <PlatesUser
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
                <HeaderUser setPlates={setPlates} plates={plates} />
                <div className='subHeader'>
                    <img src={Image} alt="Imagem macarons" />

                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </div>
                <div className="frameMobile">
                    {
                        Array.from(Map.groupBy(plates, (plate) => plate.category)).map((result) => {
                            return <div className="sections">
                                <Section title={result[0]}>
                                    <IoIosArrowBack id='arrowBack' className='arrow' />
                                    {
                                        result[1].map(plate => (
                                            <PlatesUser
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


        </Container >
    )
};
