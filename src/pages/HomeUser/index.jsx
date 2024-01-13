import { PiHeart } from 'react-icons/pi';

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

import MediaQuery, { useMediaQuery } from 'react-responsive'


export function HomeUser() {
    return (
        <Container>
            <MediaQuery minWidth={750}>
                <HeaderUserDesktop />
                <div className='subHeaderBig'>
                    <img src={ImageBig} alt="Imagem macarons" />

                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </div>
                <div className="frameBig">
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

                        <PlatesUser
                            icon={PiHeart}
                            image={ImageSpaguetti}

                            data={{
                                title: 'Torradas de Parma >',
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
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={600}>
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


        </Container>
    )
};
