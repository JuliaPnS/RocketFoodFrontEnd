import { PiHeart } from 'react-icons/pi';


import { Container, ImgSubHeader } from './styles';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Plates } from '../../components/Plates';


export function HomeUser() {
    return(
        <Container>
            <Header />
            <div className='subHeader'>
                <ImgSubHeader src="../../assets/imgsubheader.png" alt="teste"/>          
                <section>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </section>
            </div>

            <Section title='Refeições'>
                <Plates
                   
                    icon={PiHeart}
                    
                    data={{
                        title: 'Salada Ravanello >',
                        price: 'R$ 49,97',
    
                    }}
                />
                
                
                

            </Section>
            <Footer />

        </Container>
    )
    

};