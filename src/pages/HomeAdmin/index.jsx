import { PiPencilSimpleLight  } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Section } from '../../components/Section';
import { PlatesAdmin } from '../../components/PlatesAdmin';

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
                <Link to='/edit/:id'>
                    <PlatesAdmin
                        data={{
                            title: 'Salada Ravanello >',
                            price: 'R$ 49,97'
        
                        }}
                    /></Link>

                    <PlatesAdmin
                         data={{
                            title: 'Spaguetti Gambe >',
                            price: 'R$ 79,97'
        
                        }}
                    />

                    <PlatesAdmin
                        data={{
                            title: 'Spaguetti Gambe >',
                            price: 'R$ 79,97'
        
                        }}
                    />

            </Section>

            <Section title='Pratos Principais'>
                <PlatesAdmin
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