import { useEffect, useState } from "react";
import { data } from "./mock/FakeApi";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ()=>{
    const [producto,setProducto]= useState({})
    useEffect(()=>{
        data.then((res)=>setProducto(res.find((item)=>item.id===1)))

    },[])

    return(
        <div>
            <ItemDetail producto={producto}/>
            </div>
        
    )
}