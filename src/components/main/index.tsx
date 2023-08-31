import { useState } from "react";
import FormNewItem from "../formNewItem";
import Item from "../item";
//import { useNavigate } from "react-router-dom";
import Style from "./style";

function Main(){
    const [selected,setSelected] = useState(false);
    //const navigate = useNavigate();
    const[items,setItems]=useState([1,2,3,4,5,6]);
    return(
        <Style.Container>
            <Style.NewItem>
                <button onClick={()=>setSelected(!selected)}>+ Novo Item</button>
                {(selected)? <FormNewItem/>:<></>}
            </Style.NewItem>
            <div>Itens</div>
            {
                items.map((e)=> {return <Item n={e}/>})
            }
        </Style.Container>
    );
}

export default Main;