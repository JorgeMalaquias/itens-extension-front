import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { reload } from "../../redux/item/slice";
import Style from "./style";


function FormNewItem(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [disabled,setDisabled] = useState(true);
    const token = 'something';
    const dispatch = useAppDispatch();
    function create(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setDisabled(true);
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
        console.log();
        setDisabled((name === "" || description === ""));
    },[name,description]);
    return(
        <Style.Form onSubmit={(e)=>create(e)}>
            <label>Nome do item</label>
            <input value={name} type="text" placeholder="Digite o nome do item" onChange={(e) => setName(e.target.value)} required/>
            <label>Descrição do item</label>
            <textarea value={description} placeholder="Digite a descrição do item" onChange={(e) => setDescription(e.target.value)} required></textarea>
            <button type="submit" disabled={disabled}>Criar</button>
        </Style.Form>
    );
}

export default FormNewItem;