import { useState } from "react";
import Style from "./style";

export interface ItemProps {
    id?: number;
    name: string;
    description: string;
}
function Item(props:ItemProps){
    const [selected,setSelected] = useState(false);
    return(
        <Style.Container>
            <button onClick={()=>setSelected(!selected)}>{props.name}</button>
            {(selected)? <p>{props.description}</p> :<></>}
        </Style.Container>
    );
}

export default Item;