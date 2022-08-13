import { useCart } from "./CartContext"
import { CartItem } from "./CartItem"


export const Cart = () =>{

    const {cart,vaciarCarrito,totalCarrito}=useCart()
   
    return(
       <>   {!cart.length?
       <div>NO CART</div>:<>
        <div>{cart.map((art)=><CartItem key={art.id} producto={art}></CartItem>)}</div>
        <h2>Total ${totalCarrito}</h2>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button> </>
        }

     </> 
    )
}