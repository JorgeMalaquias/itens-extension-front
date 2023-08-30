import { useState } from "react";
import FormNewItem from "../formNewItem";
import { useNavigate } from "react-router-dom";
import Style from "./style";

function Main(){
    const [selected,setSelected] = useState(false);
    const navigate = useNavigate();
    return(
        <Style.Container>
            <Style.NewItem>
                <button onClick={()=>setSelected(!selected)}>+ Novo Item</button>
                {(selected)? <FormNewItem/>:<></>}
            </Style.NewItem>
            <div>Itens</div>
        </Style.Container>
    );
}

export default Main;