import { PiUploadSimple } from "react-icons/pi";
import { IoIosArrowBack } from 'react-icons/io';

import { Container } from './styles';

import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';



export function NewPlate() {
    return (
        <Container>
            <HeaderAdmin />

            <div className="frame">
                <p><IoIosArrowBack />voltar</p>
                    <h1>Novo prato</h1>

                    <label for="image">Imagem do Prato</label>
                    <input type="file" id="image" placeholder="Selecione Imagem"></input>
                
                <label for="name">Nome</label>
                    <Input
                        id='name'
                        placeholder='Ex: Salada Ceasar'
                        type='text'
                    />

                <label for="category">Categoria</label>
                    <Input id='category' placeholder='Ex: Salada Ceasar'
                type='dropdown'>

                    </Input>

                <label for="ingredients">Ingredientes</label>
                    <Input
                        id='ingredients'
                        placeholder='Ex: Salada Ceasar'
                        type='text'
                    />


                    
                <label for="price">Preço</label>
                    <Input
                        id='price'
                        placeholder='R$0,00'
                        type='text'
                    />

                <label for="description">Descrição</label>
                    <TextArea
                        id='description'
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                    />
                    
               <Button title='Salvar Alterações' loading></Button>
               
            </div>
                   
                <Footer />

        </Container>
    )
}