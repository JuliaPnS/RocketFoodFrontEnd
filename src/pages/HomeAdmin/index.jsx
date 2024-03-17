import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { HeaderAdminDesktop } from '../../components/HeaderAdminDesktop';
import { Section } from '../../components/Section';
import { PlatesAdmin } from '../../components/PlatesAdmin';

import Image from '../../assets/imgsubheader.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function HomeAdmin() {
    const [plates, setPlates] = useState([]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        return <button onClick={() => onClick()} id='arrowForward' className='arrow'> <IoIosArrowForward /></button>;
      };

      const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        return <button onClick={() => onClick()} id='arrowBack' className='arrow'> <IoIosArrowBack /></button>;
      };

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

                <div className="frame">
                    {
                        Array.from(Map.groupBy(plates, (plate) => plate.category)).map((result) => {
                            return (

                                <div className="sections">
                                    <Section title={result[0]}>
                                        <Carousel centerMode removeArrowOnDeviceType="mobile" responsive={responsive} containerClass="plates" customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
                                           
                                            {
                                                result[1].map(plate => (
                                                    <PlatesAdmin
                                                        key={String(plate.id)}
                                                        data={plate}
                                                    />
                                                ))
                                            }
                                        </Carousel>
                                    </Section>
                                </div>

                            )

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

                <div className="frame">
                    {
                        Array.from(Map.groupBy(plates, (plate) => plate.category)).map((result) => {
                            return (

                                <div className="sections">
                                    <Section title={result[0]}>
                                        <Carousel centerMode dragEnabled removeArrowOnDeviceType="mobile" responsive={responsive} containerClass="plates" customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
                                           
                                            {
                                                result[1].map(plate => (
                                                    <PlatesAdmin
                                                        key={String(plate.id)}
                                                        data={plate}
                                                    />
                                                ))
                                            }
                                        </Carousel>
                                    </Section>
                                </div>

                            )
                        })
                    }
                </div>
            </MediaQuery>
            <Footer />

        </Container>
    )
};