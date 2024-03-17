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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export function HomeUser() {
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
                <HeaderUserDesktop setPlates={setPlates} plates={plates} />

                <div className='subHeaderDesktop'>
                    <img src={ImageBig} alt="Imagem macarons" />

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
                                                    <PlatesUser
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
                <HeaderUser setPlates={setPlates} plates={plates} />
                <div className='subHeader'>
                    <img src={Image} alt="Imagem macarons" />

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
                                                    <PlatesUser
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


        </Container >
    )
};
