import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./style";

interface Props {
    isOk:boolean;
    isANumber:number;
}
function FormNewItem(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [disabled,setDisabled] = useState(true);
    const navigate = useNavigate();
    const token = 'something';
    function create(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setDisabled(true);
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.post(`${import.meta.env.VITE_BASE_URL}/items`,{name,description}, config).then(() => {
            alert("funfou");
            setName("");
            setDescription("");
        }).catch((r) => {
            setDisabled(false);
            alert(r.response.data);
        })
    }
    useEffect(()=>{
        console.log();
        setDisabled((name === "" || description === ""));
    },[name,description]);
    return(
        <Style.Form onSubmit={(e)=>create(e)}>
            <div>+ Novo Item</div>
            <input value={name} type="text" placeholder="Digite o nome do item" onChange={(e) => setName(e.target.value)} required/>
            <textarea value={description} placeholder="Digite a descrição do item" onChange={(e) => setDescription(e.target.value)} required></textarea>
            <button type="submit" disabled={disabled}>Criar</button>
        </Style.Form>
    );
}

export default FormNewItem;