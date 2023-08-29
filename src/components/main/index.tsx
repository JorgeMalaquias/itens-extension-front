import { useState } from "react";
import FormNewItem from "../formNewItem";
import OpenFormButton from "../openFormButton";


function Main(){
    const [selected,setSelected] = useState(true);
    return(
        <>
            {(selected)? <FormNewItem/>:<OpenFormButton/>}
            
            <div>Itens</div>
        </>
    );
}

export default Main;