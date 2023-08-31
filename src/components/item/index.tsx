import { useState } from "react";
import Style from "./style";

interface Props {
    n: number;
}
function Item(props:Props){
    const [selected,setSelected] = useState(false);
    return(
        <Style.Container>
            <button onClick={()=>setSelected(!selected)}>{props.n}</button>
            {(selected)? <p>Some text</p> :<></>}
        </Style.Container>
    );
}

export default Item;