import axios from "axios";
import { useEffect, useState } from "react";
import FormNewItem from "../formNewItem";
import Item, { ItemProps } from "../item";
//import { useNavigate } from "react-router-dom";
import Style from "./style";
import { useAppSelector } from "../../redux/hooks";
function Main(){
    const [selected,setSelected] = useState(false);
    //const navigate = useNavigate();
    const[items,setItems]=useState([]);
    const token = 'something';
    const update = useAppSelector((rootReducer)=>rootReducer.itemReducer.update);

    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        setSelected(false);
        axios.get(`${import.meta.env.VITE_BASE_URL}/items`, config).then((r) => {
            setItems(r.data);
        }).catch((r) => {
            alert(r.response.data);
        })
    },[update]);
    return(
        <Style.Container>
            <Style.NewItem>
                <button onClick={()=>setSelected(!selected)}>+ Novo Item</button>
                {(selected)? <FormNewItem/>:<></>}
            </Style.NewItem>
            <div>Itens</div>
            {
                items.map((e:ItemProps)=> {return <Item key={e.id} name={e.name} description={e.description}/>})
            }
        </Style.Container>
    );
}

export default Main;