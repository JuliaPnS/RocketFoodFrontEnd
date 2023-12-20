import { PiUploadSimple, PiX } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';


import { Container } from './styles';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/ButtonBig';
import { IngredientsTag } from '../../components/IngredientsTag';



export function NewPlate() {
    return (
        <Container>
            <HeaderAdmin />

            <div className="frame">
                <Link to='/admin'><p><IoIosArrowBack />voltar</p></Link>
                    <h1>Novo prato</h1>

                    <label htmlFor="image">Imagem do Prato</label>
                    <div className="image">
                        <PiUploadSimple />
                        <input type="file" id="image" placeholder="Selecione Imagem"></input>
                        <p>Selecione Imagem</p>
                    </div>
                
                <label htmlFor="name">Nome</label>
                    <Input
                        id='name'
                        placeholder='Ex: Salada Ceasar'
                        type='text'
                    />

                    <label htmlFor="category">Categoria</label>
                    <div className="category">
                        <select name="category" id="category" placeholder="Selecione a Categoria" >
                                <option value="paonaan">Refeição</option>
                        </select>
                        <IoIosArrowDown />
                   </div>
                
               
                   <IngredientsTag title="teste" icon={PiX}/>

                <label htmlFor="price">Preço</label>
                    <Input
                        id='price'
                        placeholder='R$0,00'
                        type='text'
                    />

                <label htmlFor="description">Descrição</label>
                    <TextArea
                        id='description'
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                    />
                    
               <Button to='/admin'title='Salvar Alterações' ></Button>

               
            </div>
                   
                <Footer />

        </Container>
    )
}