import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from './styles';
import { Button } from '../../components/ButtonBig';
import { Input } from '../../components/Input';

import Logo from '../../assets/logofill.svg';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password})
    }

    return (
        <Container>
            <Form>
                    <h1>
                        <img src={Logo} alt="Logo Food Explorer" />
                        food explorer</h1>
               

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
                <Button title='Entrar' onClick={handleSignIn}/>

                <Link to='/register'>Criar uma Conta</Link >
            </Form>

        </Container>
    )
}