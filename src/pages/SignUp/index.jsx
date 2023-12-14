import { Link } from 'react-router-dom';

import { Container, Form } from './styles';
import { Button } from '../../components/ButtonBig';
import { Input } from '../../components/Input';

import Logo from '../../assets/logofill.svg';

export function SignUp() {
    return (
        <Container>

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
                    />

                    <label for='email'>Email</label>
                    <Input 
                        id='email'
                        placeholder='Exemplo: exemplo@exemplo.com.br'
                        type='text'
                    />
            
                    <label for='password'>Senha</label>
                    <Input 
                        id='password'
                        placeholder='No mínimo 6 caracteres'
                        type='password'
                    />

                    
                <Button title='Criar Conta'/>

                <Link to='/'>Já tenho uma conta</Link>
            </Form>

        </Container>
    )
};