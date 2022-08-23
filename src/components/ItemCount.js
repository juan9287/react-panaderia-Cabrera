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

        <div className="itemCount">
        
        <button  className="btn btnQty" onClick={restar}>-</button>
        <span>{counter}</span>
        <button  className="btn btnQty" onClick={sumar}>+</button>
        <br></br>
        {counter>0 && <button className="btn navBtn" onClick={()=>onAdd(counter)}>Agregar al carrito</button>}
        </div>
    )


}

export default ItemCount