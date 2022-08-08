import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'
import ItemCount from "./ItemCount"
import swal from 'sweetalert'


export const ItemDetail = ({producto})=>{
    const {id}=producto
    const img = `../productos_img/producto_${id}.jpg`
    const navegar = useNavigate()
    const [counter, setCounter]= useState(0)
    const [compra,setCompra]= useState(false)
    const onAdd =(cantidad)=>{
        swal({
            title: "Felicitaciones",
            text: `Haz agregado ${cantidad} productos a tu carrito`,
            icon: "success",
          });
        setCompra(true)
    }

    return(
        <>
        <div>
            <img src={img} style={{width:"30rem"}} alt={producto.nombre}  ></img>
            <h1>{producto.nombre}</h1>
            <p >{producto.categoria}</p>
            <p >${producto.precio}</p>
            <p >stock:{producto.stock}</p>
        </div>
       {compra ? <button onClick={()=>navegar('/cart')}>Ir al Carrito</button>:
        <ItemCount stock={producto.stock} counter={counter} setCounter={setCounter} onAdd={onAdd}></ItemCount>}
        <button className="btn" onClick={()=> navegar('/productos')}>Volver al listado</button> 
        </>
    )

}