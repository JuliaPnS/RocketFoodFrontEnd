import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import MediaQuery, { useMediaQuery } from 'react-responsive';

import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { HeaderAdminDesktop } from '../../components/HeaderAdminDesktop';
import { Section } from '../../components/Section';
import { PlatesAdmin } from '../../components/PlatesAdmin';

import Image from '../../assets/imgsubheader.png';
import ImageSalad from '../../assets/plates/image1.png';
import ImageSpaguetti from '../../assets/plates/image2.png';
import ImagePrugna from '../../assets/plates/image3.png';
import ImagePeachy from '../../assets/plates/image4.png';
import ImageEspresso from '../../assets/plates/image5.png';
import ImageJuice from '../../assets/plates/image6.png';
import ImageToast from '../../assets/plates/image7.png';
import ImageMacarons from '../../assets/plates/image8.png';
import ImageTea from '../../assets/plates/image9.png';



export function HomeAdmin() {

    return (
        <Container>
            <MediaQuery minWidth={1440}>
                <HeaderAdminDesktop />

                <div className='subHeaderDesktop'>
                    <img src={Image} alt="Imagem de macarons" />
                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </div>

                <div className="frameDesktop">
                    <div className="sectionOne">
                        <Section title='Refeições'>
                            <IoIosArrowBack id='arrowBack' className='arrow' />
                            <PlatesAdmin
                                image={ImageSalad}
                                data={{
                                    title: 'Spaguetti Gambe >',
                                    price: 'R$ 79,97'

                                }}
                            />

                            <PlatesAdmin
                                image={ImageSpaguetti}

                                data={{
                                    title: 'Salada Ravanello >',
                                    price: 'R$ 49,97',
                                    description: 'saladinha nham'

                                }}
                            />

                            <PlatesAdmin
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
                            <PlatesAdmin
                                image={ImagePrugna}
                                data={{
                                    title: 'Prugna Pie >',
                                    price: 'R$ 79,97'

                                }}
                            />

                            <PlatesAdmin
                                image={ImagePeachy}
                                data={{
                                    title: 'Peachy Pastrie >',
                                    price: 'R$ 32,97'

                                }}
                            />

                            <PlatesAdmin
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
                            <PlatesAdmin
                                image={ImageEspresso}
                                data={{
                                    title: 'Espresso >',
                                    price: 'R$ 15,97'

                                }}
                            />

                            <PlatesAdmin
                                image={ImageJuice}
                                data={{
                                    title: 'Suco de Maracujá >',
                                    price: 'R$ 13,97'

                                }}
                            />

                            <PlatesAdmin
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
            <MediaQuery maxWidth={1439}>
                <HeaderAdmin />

                <div className='subHeader'>
                    <img src={Image} alt="Imagem de macarons" />
                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </div>

                <div className="frameDesktop">
                    <div className="sectionOne">
                        <Section title='Refeições'>
                            <IoIosArrowBack id='arrowBack' className='arrow' />
                            <PlatesAdmin
                                image={ImageSalad}
                                data={{
                                    title: 'Spaguetti Gambe >',
                                    price: 'R$ 79,97'

                                }}
                            />

                            <PlatesAdmin
                                image={ImageSpaguetti}

                                data={{
                                    title: 'Salada Ravanello >',
                                    price: 'R$ 49,97'

                                }}
                            />

                            <PlatesAdmin
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
                            <PlatesAdmin
                                image={ImagePrugna}
                                data={{
                                    title: 'Prugna Pie >',
                                    price: 'R$ 79,97'

                                }}
                            />

                            <PlatesAdmin
                                image={ImagePeachy}
                                data={{
                                    title: 'Peachy Pastrie >',
                                    price: 'R$ 32,97'

                                }}
                            />

                            <PlatesAdmin
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
                            <PlatesAdmin
                                image={ImageEspresso}
                                data={{
                                    title: 'Espresso >',
                                    price: 'R$ 15,97'

                                }}
                            />

                            <PlatesAdmin
                                image={ImageJuice}
                                data={{
                                    title: 'Suco de Maracujá >',
                                    price: 'R$ 13,97'

                                }}
                            />

                            <PlatesAdmin
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
            <Footer />

        </Container>
    )
};