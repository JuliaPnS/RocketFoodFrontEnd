import { PiPencilSimpleLight  } from 'react-icons/pi';


import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Section } from '../../components/Section';
import { Plates } from '../../components/Plates';

import Image from '../../assets/imgsubheader.png';


export function HomeAdmin() {
    return(
        <Container>
            <HeaderAdmin />

                    <div className='subHeader'>
                        <img src={Image} alt="teste" />
                    
                    <section>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p> 
                    </section>
                    </div>
                        


            <Section title='Refeições'>
                <Plates
                    icon={PiPencilSimpleLight }
                    
                    data={{
                        title: 'Salada Ravanello >',
                        price: 'R$ 49,97'
    
                    }}
                />

                 <Plates
                    icon={PiPencilSimpleLight }
                    
                    data={{
                        title: 'Spaguetti Gambe >',
                        price: 'R$ 79,97'
    
                    }}
                />

                <Plates
                    icon={PiPencilSimpleLight}
                    
                    data={{
                        title: 'Spaguetti Gambe >',
                        price: 'R$ 79,97'
    
                    }}
                />

            </Section>

            <Section title='Pratos Principais'>
                <Plates
                    icon={PiPencilSimpleLight}
                    
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