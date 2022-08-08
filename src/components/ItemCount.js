import React from "react";


function ItemCount ({setCounter,counter,stock,onAdd}){
    

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