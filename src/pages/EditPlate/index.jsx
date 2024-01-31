import { PiUploadSimple, PiX } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from '../../service/api';


import { Container } from './styles';
import { HeaderAdminDesktop } from '../../components/HeaderAdminDesktop';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/ButtonBig';
import { IngredientsTag } from '../../components/IngredientsTag';



export function EditPlate() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [data, setData] = useState(null);

    const { id } = useParams();

    const navigate = useNavigate();

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente excluir o prato?")

        if(confirm) {
            await api.delete(`/plates/${id}`);
            navigate('/');
        }
    }

    async function handleEditPlate() {
        const response = await api.post("/plates", {
            title,
            description,
            ingredients,
            price,
            category
        });

        var formData = new FormData();
        formData.append("image", image);
        await api.patch(`/plates/plateImage/${response.data.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        alert("Prato atualizado com sucesso!");
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
            <MediaQuery maxWidth={1024}>
                <HeaderAdmin />

                <div className="frame">
                    <Link to={`/platesdetails/${id}`}><p><IoIosArrowBack />voltar</p></Link>
                    <h1>Editar Prato</h1>

                    <label for="image">Imagem do Prato</label>
                    <div className="image">
                        <PiUploadSimple />
                        <input type="file" id="image" placeholder="Selecione Imagem" onChange={e => setImage(e.target.files[0])}></input>
                        <p>Selecione uma imagem para alterá-la</p>
                    </div>

                    <label for="name">Nome</label>
                    <Input
                        id='name'
                        placeholder='Ex: Salada Ceasar'
                        type='text'
                        onChange={e => setTitle(e.target.value)}

                    />

                    <label for="category">Categoria</label>
                    <div className="category">
                        <select name="category" id="category" placeholder="Selecione a Categoria"
                            onChange={e => setCategory(e.target.value)} >
                            <option value="">Selecione a categoria</option>
                            <option value="refeicoes">Refeições</option>
                            <option value="pratosPrincipais">Pratos Principais</option>
                            <option value="bebidas">Bebidas</option>
                            <option value="sobremesas">Sobremesas</option>

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

                    <label for="price">Preço</label>
                    <Input
                        id='price'
                        placeholder='R$0,00'
                        type='text'
                        onChange={e => setPrice(e.target.value)}
                    />

                    <label for="description">Descrição</label>
                    <TextArea
                        id='description'
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                    />

                    <div className="buttons">
                        <Button className='delete' title='Excluir Prato' onClick={handleRemove}></Button>
                        <Button to='/' title='Salvar Alterações' ></Button>
                    </div>


                </div>
            </MediaQuery>

            <MediaQuery minWidth={1440}>
                <HeaderAdminDesktop />

                <div className="frame">
                    <Link to={`/platesdetails/${id}`}><p><IoIosArrowBack />voltar</p></Link>

                    <h1>Editar Prato</h1>
                    <div className="sectionOne">
                        <div className="firstChild">
                            <label for="image">Imagem do Prato</label>
                            <div className="image">
                                <PiUploadSimple />
                                <input type="file" id="image" placeholder="Selecione Imagem" onChange={e => setImage(e.target.files[0])}></input>
                                <p>Selecione imagem</p>
                            </div>
                        </div>
                        <div className="secondChild">
                            <label for="name">Nome</label>
                            <Input
                                id='name'
                                placeholder='Ex: Salada Ceasar'
                                type='text'
                            />
                        </div>
                        <div className="thirdChild">
                            <label for="category">Categoria</label>
                            <div className="category">
                                <select name="category" id="category" placeholder="Selecione a Categoria"
                                    onChange={e => setCategory(e.target.value)} >
                                    <option value="">Selecione a categoria</option>
                                    <option value="refeicoes">Refeições</option>
                                    <option value="pratosPrincipais">Pratos Principais</option>
                                    <option value="bebidas">Bebidas</option>
                                    <option value="sobremesas">Sobremesas</option>
                                </select>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className="sectionTwo">
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
                        <div className="fourthChild">
                            <label for="price">Preço</label>
                            <Input
                                id='price'
                                placeholder='R$0,00'
                                type='text'
                            />
                        </div>
                    </div>
                    <label for="description">Descrição</label>
                    <TextArea
                        id='description'
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                        onChange={e => setDescription(e.target.value)}
                    />


                    <div className="buttons">
                        <Button onClick={handleRemove} className='delete' title='Excluir Prato' ></Button>
                        <Button to='/' title='Salvar Alterações' onClick={handleEditPlate} ></Button>
                    </div>


                </div>
            </MediaQuery>


            <Footer />

        </Container>
    )
}