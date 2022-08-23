import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'
import ItemCount from "./ItemCount"
import swal from 'sweetalert'
import { useCart } from "./CartContext"



export const ItemDetail = ({producto})=>{
    const {id,nombre,stock,precio,img }=producto
    
    const navegar = useNavigate()
    const [counter, setCounter]= useState(0)
    const [compra,setCompra]= useState(false)
    const {addToCart} = useCart()
    const onAdd =(cantidad)=>{

        let itemCarrito ={
            id,
            nombre,
            img,
            stock,
            precio,
            cantidad:counter,

        }
        addToCart(itemCarrito)
        swal({
            title: "Felicitaciones",
            text: `Haz agregado ${cantidad} productos a tu carrito`,
            icon: "success",
          });
        setCompra(true)
        
    }

    return(
        <div className="itemDetail container">
        
        <div className="itemDetailCard"> 
            <picture className="itemDetailPicture"><img src={producto.img}  alt={producto.nombre} ></img></picture>

            <div className="itemDetailText">
            <h1>{producto.nombre}</h1>
            <p >{producto.categoria}</p>
            <p >${producto.precio}</p>
            <p >stock:{producto.stock}</p>
            {compra ? <button className="btn navBtn" onClick={()=>navegar('/cart')}>Ir al Carrito</button>:
            <ItemCount stock={producto.stock} counter={counter} setCounter={setCounter} onAdd={onAdd}></ItemCount>}
            <button className="btn navBtn" onClick={()=> navegar('/productos')}>Volver al listado</button>
            </div>
            
        </div>
        
        </div>
    )

}