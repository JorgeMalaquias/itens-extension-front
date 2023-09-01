import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { reload } from "../../redux/item/slice";
import Style from "./style";

interface Props{
    setSelected:React.Dispatch<React.SetStateAction<boolean>>;
}

function FormNewItem({setSelected}:Props){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [disabled,setDisabled] = useState(true);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function create(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setDisabled(true);
        const token = window.localStorage.getItem("token");
        if(!token){
            alert("É necessário estar logado para poder usar a extensão!Você será redirecionado para área de login");
            navigate("login");
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.post(`${import.meta.env.VITE_BASE_URL}/items`,{name,description}, config).then(() => {
            alert("Item criado com sucesso!");
            setName("");
            setDescription("");
            dispatch(reload());
        }).catch((r) => {
            setDisabled(false);
            alert(r.response.data);
        })
    }

    useEffect(()=>{
        setDisabled((name === "" || description === ""));
    },[name,description]);
    
    return(
        <Style.Container>
            <Style.Form onSubmit={(e)=>create(e)}>
                <label>Nome do item</label>
                <input value={name} type="text" placeholder="Digite o nome do item" onChange={(e) => setName(e.target.value)} required/>
                <label>Descrição do item</label>
                <textarea value={description} placeholder="Digite a descrição do item" onChange={(e) => setDescription(e.target.value)} required></textarea>
                <div>
                    <button type="button" onClick={()=>setSelected(false)}>Cancelar</button>
                    <button type="submit" disabled={disabled}>Criar</button>
                </div>
            </Style.Form>
        </Style.Container>
    );
}

export default FormNewItem;