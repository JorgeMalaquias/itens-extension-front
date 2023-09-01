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
        if(password.length<6){
            alert("A senha precisa ter ao menos 6 dígitos");
            return;
        }
        const body = {
            email,
            password
        }
        axios.post(`${import.meta.env.VITE_BASE_URL}/users`, body).then(() => {
            alert("Cadastro feito com sucesso. Para acessar sua conta faça o login");
            setEmail("");
            setPassword("");
            navigate("/login");
        }).catch((r) => {
            let message:string = "";
            if(r.message==="Network Error"){
                alert("Problemas de conexão com o servidor. Tente novamente em breve!")
            }
            if(r.response.data){
                message+=r.response.data + "\n" + r.message;
            }
            alert(message);
        })
    }
    
    return (
        <Style.Form onSubmit={register}>
            <div>Faça seu cadastro inserindo os dados:</div>
            <input value={email} type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <input value={password} type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Cadastrar</button>
        </Style.Form>
    );
}
    

function Register() {
    return (
        <Style.Container>
            <h1>Items Extension</h1>
            <RegisterForm />
            <Link to={"/login"}>Já está cadastrado? Entre agora!</Link>
        </Style.Container>
    );
}

export default Register;