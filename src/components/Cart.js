import React from "react"
import { useCart } from "./CartContext"
import { CartItem } from "./CartItem"
import { EmptyCart } from "./EmptyCart"
import {useNavigate} from  "react-router-dom"


export const Cart = () =>{

    const {cart,vaciarCarrito,totalCarrito}=useCart()
    const navegar = useNavigate()
   
    return(
       <div>{!cart.length?
       <div className="emptyCart"><EmptyCart></EmptyCart></div>
       :<div className="cart container">
        
        {cart.map((art)=><CartItem key={art.id} producto={art}></CartItem>)}
        
        <h2>Total ${totalCarrito()}</h2>
        <button className="btn" onClick={vaciarCarrito}>Vaciar Carrito</button> 
        <button className="btn" onClick={ ()=>{navegar('/check')}}>COMPRAR</button>
        </div>
        }

     </div> 
    )
}