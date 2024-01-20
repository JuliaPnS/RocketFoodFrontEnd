import { PiHeart } from 'react-icons/pi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useState, useEffect } from 'react';
import { api } from '../../service/api';

import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderUser } from '../../components/HeaderUser';
import { HeaderUserDesktop } from '../../components/HeaderUserDesktop';
import { Section } from '../../components/Section';
import { PlatesUser } from '../../components/PlatesUser';

import Image from '../../assets/imgsubheader.png';
import ImageBig from '../../assets/imgsubheaderbig.png';
import ImageSalad from '../../assets/plates/image1.png';
import ImageSpaguetti from '../../assets/plates/image2.png';
import ImagePrugna from '../../assets/plates/image3.png';
import ImagePeachy from '../../assets/plates/image4.png';
import ImageEspresso from '../../assets/plates/image5.png';
import ImageJuice from '../../assets/plates/image6.png';
import ImageToast from '../../assets/plates/image7.png';
import ImageMacarons from '../../assets/plates/image8.png';
import ImageTea from '../../assets/plates/image9.png';

import MediaQuery, { useMediaQuery } from 'react-responsive';


export function HomeUser() {
    const [plates, setPlates] = useState([]);
    return (
        <Container>
            <MediaQuery minWidth={750}>
                <HeaderUserDesktop setPlates={setPlates} plates={plates} />
                <div className='subHeaderDesktop'>
                    <img src={ImageBig} alt="Imagem macarons" />

                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </div>
                <div className="frameDesktop">
                    <div className="sectionOne">
                        <Section title='Refeições'>
                            <IoIosArrowBack id='arrowBack' className='arrow' />
                            <PlatesUser
                                icon={PiHeart}
                                image={ImageSalad}

                                data={{
                                    title: 'Salada Ravanello >',
                                    price: 'R$ 49,97'
                                }}
                            />

                       

                            <PlatesUser
                                icon={PiHeart}
                                image={ImageSpaguetti}

                                data={{
                                    title: 'Spaguetti Gambe >',
                                    price: 'R$ 79,97'

                                }}
                            />

                            <PlatesUser
                                icon={PiHeart}
                                image={ImageToast}

                                data={{
                                    title: 'Torradas de Parma >',
                                    price: 'R$ 25,97'

                                }}
                            />
                            <IoIosArrowForward id='arrowForward' className='arrow' />
                        </Section>
                    </div>
                    <div className="sectionTwo">

                        <Section title='Pratos Principais'>
                            <IoIosArrowBack id='arrowBack' className='arrow' />
                            <PlatesUser
                                icon={PiHeart}
                                image={ImagePrugna}
                                data={{
                                    title: 'Prugna Pie >',
                                    price: 'R$ 79,97'

                                }}
                            />

                            <PlatesUser
                                icon={PiHeart}
                                image={ImagePeachy}
                                data={{
                                    title: 'Peachy Pastrie >',
                                    price: 'R$ 32,97'

                                }}
                            />

                            <PlatesUser
                                icon={PiHeart}
                                image={ImageMacarons}
                                data={{
                                    title: 'Macarons >',
                                    price: 'R$ 79,97'

                                }}
                            />
                            <IoIosArrowForward id='arrowForward' className='arrow' />
                        </Section>

                    </div>
                    <div className="sectionThree">
                        <Section title='Bebidas'>
                            <IoIosArrowBack id='arrowBack' className='arrow' />
                            <PlatesUser
                                icon={PiHeart}
                                image={ImageEspresso}
                                data={{
                                    title: 'Espresso >',
                                    price: 'R$ 15,97'

                                }}
                            />

                            <PlatesUser
                                icon={PiHeart}
                                image={ImageJuice}
                                data={{
                                    title: 'Suco de Maracujá >',
                                    price: 'R$ 13,97'

                                }}
                            />
                            <PlatesUser
                                icon={PiHeart}
                                image={ImageTea}
                                data={{
                                    title: 'Tè d autunno >',
                                    price: 'R$ 19,97'

                                }}
                            />
                            <IoIosArrowForward id='arrowForward' className='arrow' />
                        </Section>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={749}>
                <HeaderUser />
                <div className='subHeader'>
                    <img src={Image} alt="Imagem macarons" />

                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </div>

                <Section title='Refeições'>
                    <PlatesUser
                        icon={PiHeart}
                        image={ImageSalad}

                        data={{
                            title: 'Salada Ravanello >',
                            price: 'R$ 49,97'
                        }}
                    />

                    <PlatesUser
                        icon={PiHeart}
                        image={ImageSpaguetti}

                        data={{
                            title: 'Spaguetti Gambe >',
                            price: 'R$ 79,97'

                        }}
                    />
                </Section>

                <Section title='Pratos Principais'>
                    <PlatesUser
                        icon={PiHeart}
                        image={ImagePrugna}
                        data={{
                            title: 'Prugna Pie >',
                            price: 'R$ 79,97'

                        }}
                    />

                    <PlatesUser
                        icon={PiHeart}
                        image={ImagePeachy}
                        data={{
                            title: 'Peachy Pastrie >',
                            price: 'R$ 32,97'

                        }}
                    />
                </Section>

                <Section title='Bebidas'>
                    <PlatesUser
                        icon={PiHeart}
                        image={ImageEspresso}
                        data={{
                            title: 'Espresso >',
                            price: 'R$ 15,97'

                        }}
                    />

                    <PlatesUser
                        icon={PiHeart}
                        image={ImageJuice}
                        data={{
                            title: 'Suco de Maracujá >',
                            price: 'R$ 13,97'

                        }}
                    />
                </Section>
            </MediaQuery>

            <Footer />


        </Container >
    )
};
