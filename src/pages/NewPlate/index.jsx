import { PiUploadSimple, PiX } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from '../../service/api';

import { Container } from './styles';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/ButtonBig';
import { IngredientsTag } from '../../components/IngredientsTag';

export function NewPlate() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();

    async function handleNewPlate() {
        await api.post("/plates", {
            title,
            description, 
            ingredients
        });

        alert("Prato criado com sucesso!");
        navigate("/admin");
    }

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredients => ingredients !== deleted));
    }

    return (
        <Container>
            <HeaderAdmin />

            <div className="frame">
                <Link to='/menuadmin'><p><IoIosArrowBack />voltar</p></Link>
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
                    onChange={e => setTitle(e.target.value)}
                   
                />

                <label htmlFor="category">Categoria</label>
                <div className="category">
                    <select name="category" id="category" placeholder="Selecione a Categoria" >
                        <option value="">Selecione a categoria</option>
                        <option value="refeicoes">Refeições</option>
                        <option value="pratosPrincipais">Pratos Principais</option>
                        <option value="bebidas">Bebidas</option>
                    </select>
                    <IoIosArrowDown />
                </div>

                <div className="ingredients">Ingredientes
                    <div className="tagsIngredients">
                        {
                            ingredients.map((ingredients, index) =>

                                <IngredientsTag
                                    key={String(index)}
                                    onClick={() => handleRemoveIngredient(ingredients)}
                                    value={ingredients} />

                            )
                        }

                        <IngredientsTag
                            placeholder="Adicionar"
                            $isNew
                            onChange={e => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            onClick={handleAddIngredient}

                        />
                    </div>
                </div>



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
                    onChange={e => setDescription(e.target.value)}
                />

                <Button onClick={handleNewPlate} title='Salvar Alterações' ></Button>


            </div>

            <Footer />

        </Container>
    )
}