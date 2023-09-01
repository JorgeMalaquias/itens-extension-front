import { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import Style from './style';



function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function register(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const body = {
            email,
            password
        }
        axios.post(`${import.meta.env.VITE_BASE_URL}/users`, body).then((response) => {
            window.localStorage.setItem("token",response.data);
            alert('Cadastro feito com sucesso. Para acessar sua conta faça o login');
            setEmail("");
            setPassword("");
            navigate("/login");
        }).catch((r) => {
            alert(r.response.data);
        })
    }
    return (
        <Style.Form onSubmit={register}>
            <input value={email} type="text" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
            <input value={password} type="text" placeholder='Senha' required onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Cadastrar</button>
        </Style.Form>
    );
}
    

export default function Register() {
    return (
        <Style.Container>
            <div>Items Extension</div>
            <RegisterForm />
            <Link to={'/login'}>Já está cadastrado? Entre agora!</Link>
        </Style.Container>
    );
}