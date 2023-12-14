import { PiHeart } from 'react-icons/pi';

import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderUser } from '../../components/HeaderUser';
import { Section } from '../../components/Section';
import { PlatesUser } from '../../components/PlatesUser';

import Image from '../../assets/imgsubheader.png';


export function HomeUser() {
    return(
        <Container>
            <HeaderUser />

                    <div className='subHeader'>
                        <img src={Image} alt="teste" />
                    
                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p> 
                    </section>
                    </div>
                        


            <Section title='Refeições'>
                <PlatesUser
                    icon={PiHeart}
                    
                    data={{
                        title: 'Salada Ravanello >',
                        price: 'R$ 49,97'
    
                    }}
                />

                 <PlatesUser
                    icon={PiHeart}
                    
                    data={{
                        title: 'Spaguetti Gambe >',
                        price: 'R$ 79,97'
    
                    }}
                />

                <PlatesUser
                    icon={PiHeart}
                    
                    data={{
                        title: 'Spaguetti Gambe >',
                        price: 'R$ 79,97'
    
                    }}
                />

            </Section>

            <Section title='Pratos Principais'>
                <PlatesUser
                    icon={PiHeart}
                    
                    data={{
                        title: 'Prugna Pie >',
                        price: 'R$ 79,97'
    
                    }}
                />

            </Section>
            <Footer />

        </Container>
    )
    

};