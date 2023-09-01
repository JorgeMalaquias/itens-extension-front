import axios from "axios";
import { useEffect, useState } from "react";
import FormNewItem from "../formNewItem";
import Item, { ItemProps } from "../item";
import { useNavigate } from "react-router-dom";
import Style from "./style";
import { useAppSelector } from "../../redux/hooks";

function Main(){
    const [formNewItemSelected,setFormNewItemSelected] = useState(false);
    const [items,setItems]=useState([]);
    const navigate = useNavigate();
    const update = useAppSelector((rootReducer)=>rootReducer.itemReducer.update);

    useEffect(()=>{
        const token = window.localStorage.getItem("token");
        if(!token){
            alert("É necessário estar logado para poder usar a extensão!Você será redirecionado para área de login");
            navigate("/login");
            return;
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/items`, config).then((r) => {
            setItems(r.data);
        }).catch(() => {
            alert("Autenticação falhou e/ou há problemas de conexão com o servidor no momento");
            navigate("/login");
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[update]);

    function logOut(){
        localStorage.removeItem("token");
        navigate("/login");
    }

    return(
        <>
            <Style.Container>
                <h1>Items Extension</h1>
                <Style.Buttons>
                    <button onClick={()=>setFormNewItemSelected(!formNewItemSelected)}>+ Criar Item</button>
                    <button onClick={logOut}>Deslogar</button>
                </Style.Buttons>
                <Style.ItemsContainer>
                    <h2>Lista de Itens</h2>
                    {(items.length===0)? <h3>Não há itens criados ainda!</h3>:<></> }
                    {
                        items.map((e:ItemProps)=> {return <Item key={e.id} name={e.name} description={e.description}/>})
                    }
                </Style.ItemsContainer>
            </Style.Container>
            {(formNewItemSelected)? <FormNewItem setSelected={setFormNewItemSelected}/>:<></>}
        </>
        
    );
}

export default Main;