import { useState } from "react";

function ItemCount (){
    let [counter, setCounter]= useState(0)
    

    return (

        <div className="container">

        <h1>Productos en el Carrito {counter}</h1>
        <button type="button" className="btn btn-light" onClick={()=>setCounter(counter-1)}>-</button>
        <button type="button" className="btn btn-light" onClick={()=>setCounter(counter+1)}>+</button>
        </div>
    )




}

export default ItemCount