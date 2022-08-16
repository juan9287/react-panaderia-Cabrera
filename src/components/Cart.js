import { useCart } from "./CartContext"
import { CartItem } from "./CartItem"
import { EmptyCart } from "./EmptyCart"


export const Cart = () =>{

    const {cart,vaciarCarrito,totalCarrito}=useCart()
   
    return(
       <div>{!cart.length?
       <div className="emptyCart"><EmptyCart></EmptyCart></div>
       :<div className="cart container">
        
        {cart.map((art)=><CartItem key={art.id} producto={art}></CartItem>)}
        
        <h2>Total ${totalCarrito()}</h2>
        <button className="btn" onClick={vaciarCarrito}>Vaciar Carrito</button> 
        </div>
        }

     </div> 
    )
}