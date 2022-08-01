import React from "react";
import { useState } from "react";

function ItemCount ({initial,stock,onAdd}){
    const [counter, setCounter]= useState(initial)

    const sumar =()=>{
        if(counter<stock){
            setCounter(counter+1)

        }
    }
    const restar =()=>{
        if (counter>0){
            setCounter(counter-1)
        }
    }
    

    return (

        <div className="container">
        <button type="button" className="btn btn-light" onClick={restar}>-</button>
        <span>{counter}</span>
        <button type="button" className="btn btn-light" onClick={sumar}>+</button>
        <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
        </div>
    )




}

export default ItemCount