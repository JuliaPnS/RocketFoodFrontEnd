import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';


import { api } from "../../service/api"

import { Container, Form } from './styles';
import { Button } from '../../components/ButtonBig';
import { Input } from '../../components/Input';

import Logo from '../../assets/logofill.svg';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password }).then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/")
        }).catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return (
        <Container>
            <MediaQuery maxWidth={990}>
                <Form>
                    <h1>
                        <img src={Logo} alt="Logo Food Explorer" />
                        food explorer
                    </h1>


                    <label for='name'>Seu nome</label>
                    <Input
                        id='name'
                        placeholder='Exemplo: Júlia Linda'
                        type='text'
                        onChange={e => setName(e.target.value)}
                    />

                    <label for='email'>Email</label>
                    <Input
                        id='email'
                        placeholder='Exemplo: exemplo@exemplo.com.br'
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label for='password'>Senha</label>
                    <Input
                        id='password'
                        placeholder='No mínimo 6 caracteres'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />


                    <Button title='Criar Conta' onClick={handleSignUp} />

                    <Link to='/'>Já tenho uma conta</Link>
                </Form>
            </MediaQuery>

            <MediaQuery minWidth={1000}>
                <h1>
                    <img src={Logo} alt="Logo Food Explorer" />
                    food explorer
                </h1>
                <Form>
                    <h2>Crie sua conta</h2>
                    <label for='name'>Seu nome</label>
                    <Input
                        id='name'
                        placeholder='Exemplo: Júlia Linda'
                        type='text'
                        onChange={e => setName(e.target.value)}
                    />

                    <label for='email'>Email</label>
                    <Input
                        id='email'
                        placeholder='Exemplo: exemplo@exemplo.com.br'
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label for='password'>Senha</label>
                    <Input
                        id='password'
                        placeholder='No mínimo 6 caracteres'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />


                    <Button title='Criar Conta' onClick={handleSignUp} />

                    <Link to='/'>Já tenho uma conta</Link>
                </Form>

            </MediaQuery>

        </Container>
    )
};