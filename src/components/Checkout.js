import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import React from "react"
import { useState } from "react"
import { db } from "../firebase/Firebase"
import { useCart } from "./CartContext"






export const Checkout = ()=>{
    const {cart, totalCarrito,vaciarCarrito}= useCart()
    const [cliente,setCliente]= useState({})
    const [orderId,setOrderId]= useState('')
    const datosCliente= (e)=>{
        setCliente({
            ...cliente,
            [e.target.name] : e.target.value

        })
    }

    const finalizarCompra =(e)=>{
        e.preventDefault()
        if(Object.values(cliente).length !==3){
            alert( "GENIO PONE LA DATA SINO NO PODES COMPRAR")
        }
        else{
            const colleccionCompra = collection (db,"Compras")
        addDoc(colleccionCompra, {
            cliente,
            items: cart,
            total: totalCarrito(),
            fecha: serverTimestamp(),
    })
        .then((res)=>{
        setOrderId(res.id)
        vaciarCarrito()
    })
        }
    }
    return (
    <>
    {!orderId ? <div>
        <h2>CHECKOUT</h2>
        <form onSubmit={finalizarCompra}>
        <input type="text" placeholder="Nombre Completo" name="nombre"  onChange={datosCliente}/>
        <input type="number" placeholder="Numero de Telefono" name="telefono" onChange={datosCliente}/>
        <input type="email" placeholder="EMAIL" name="email" onChange={datosCliente}/>
        <button type="submit">FINALIZAR COMPRA</button>
        </form>
    </div> :
    <div>
        <h1>
             Muchas Gracias por su compra
        </h1>
        <h3>
            Su orden: {orderId}
        </h3>
        <button>Volver a la home</button>
    </div>}
    </>
    
)

}