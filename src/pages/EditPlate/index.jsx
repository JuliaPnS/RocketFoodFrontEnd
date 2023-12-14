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



export function EditPlate() {
    return (
        <Container>
            <HeaderAdmin />

            <div className="frame">
                <Link to='/admin'><p><IoIosArrowBack />voltar</p></Link>
                    <h1>Editar Prato</h1>

                    <label for="image">Imagem do Prato</label>
                    <div className="image">
                        <PiUploadSimple />
                        <input type="file" id="image" placeholder="Selecione Imagem"></input>
                        <p>Selecione uma imagem para alterá-la</p>
                    </div>
                
                <label for="name">Nome</label>
                    <Input
                        id='name'
                        placeholder='Ex: Salada Ceasar'
                        type='text'
                    />

                    <label for="category">Categoria</label>
                    <div className="category">
                        <select name="category" id="category" placeholder="Selecione a Categoria" >
                                <option value="paonaan">Refeição</option>
                        </select>
                        <IoIosArrowDown />
                   </div>
                
               
                   <IngredientsTag title="teste" icon={PiX}/>

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
                
                <div className="buttons">
                    <Button to='/admin' className='delete' title='Excluir Prato' ></Button>    
                    <Button to='/admin' title='Salvar Alterações' ></Button>
                </div>

               
            </div>
                   
                <Footer />

        </Container>
    )
}