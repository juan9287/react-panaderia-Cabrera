import { useCart } from "./CartContext"
import { CartItem } from "./CartItem"
import { EmptyCart } from "./EmptyCart"


export const Cart = () =>{

    const {cart,vaciarCarrito,totalCarrito}=useCart()
   
    return(
       <>   {!cart.length?
       <div className="emptyCart"><EmptyCart></EmptyCart></div>:<>
        <div className="cart">{cart.map((art)=><CartItem key={art.id} producto={art}></CartItem>)}</div>
        <h2>Total ${totalCarrito()}</h2>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button> </>
        }

     </> 
    )
}