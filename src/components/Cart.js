import React from "react"
import { useCart } from "./CartContext"
import { CartItem } from "./CartItem"
import { EmptyCart } from "./EmptyCart"
import {useNavigate} from  "react-router-dom"


export const Cart = () =>{

    const {cart,vaciarCarrito,totalCarrito}=useCart()
    const navegar = useNavigate()
    let i = 1
   
    return(
       <div>{!cart.length?
       <div className="emptyCart"><EmptyCart></EmptyCart></div>
       :<div className="container cart"><table className="cart container table table-striped">
        <thead>
            <tr>
                <th scope="col">Item</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
                <th></th>
            </tr>

        </thead>
        <tbody>
            {cart.map((art)=>
            
                
                <CartItem key={art.id} producto={art} item={i++}></CartItem>
            
            )}
            
            
        
            <tr className="">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <th scope="row">Total ${totalCarrito()}</th>
                <td><button type="button" className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button> 
                <button type="button" className="btn btn-success" onClick={ ()=>{navegar('/check')}}>COMPRAR</button></td>
            </tr>
        </tbody>
       
        
        
        
        
        
        
        </table>
        
        </div>
        }

     </div> 
    )
}