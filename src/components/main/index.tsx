import axios from "axios";
import { useEffect, useState } from "react";
import FormNewItem from "../formNewItem";
import Item, { ItemProps } from "../item";
import { useNavigate } from "react-router-dom";
import Style from "./style";
import { useAppSelector } from "../../redux/hooks";
function Main(){
    const [selected,setSelected] = useState(false);
    const navigate = useNavigate();
    const[items,setItems]=useState([]);
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
        setSelected(false);
        axios.get(`${import.meta.env.VITE_BASE_URL}/items`, config).then((r) => {
            setItems(r.data);
        }).catch(() => {
            alert("Autenticação falhou e/ou há problemas de conexão com o servidor no momento");
            navigate("/login");
        })
    },[update]);
    return(
        <>
            <Style.Container>
                <h1>Items Extension</h1>
                <Style.NewItem>
                    <button onClick={()=>setSelected(!selected)}>+ Novo Item</button>
                </Style.NewItem>
                <h2>Itens</h2>
                {
                    items.map((e:ItemProps)=> {return <Item key={e.id} name={e.name} description={e.description}/>})
                }
            </Style.Container>
            {(selected)? <FormNewItem setSelected={setSelected}/>:<></>}
        </>
        
    );
}

export default Main;