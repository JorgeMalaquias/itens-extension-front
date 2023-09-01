import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';
import Style from './style';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(password.length<6){
            alert("A senha precisa ter ao menos 6 dígitos");
            return;
        }
        const body = {
            email,
            password
        }
        axios.post(`${import.meta.env.VITE_BASE_URL}/users/auth`, body).then((response) => {
            window.localStorage.setItem("token", response.data);
            alert("Login feito com sucesso!");
            setEmail("");
            setPassword("");
            navigate("/");
        }).catch((r) => {
            let message:string = "";
            if(r.message==="Network Error"){
                alert("Problemas de conexão com o servidor. Tente novamente em breve!")
            }
            if(r.response.data){
                message+=r.response.data + "\n" + r.message;
            }
            alert(message);
        });
    }

    return (
        <Style.Form onSubmit={login}>
            <div>Faça seu login inserindo os dados:</div>
            <input value={email} type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <input value={password} type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Logar</button>
        </Style.Form>
    );
}

function Login() {
    return (
        <Style.Container>
            <h1>Items Extension</h1>
            <LoginForm />
            <Link to={"/register"}>Não possui cadastro? Cadastre-se aqui!</Link>
        </Style.Container>

    );
}

export default Login;