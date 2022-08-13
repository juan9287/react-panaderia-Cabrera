import {useCart} from './CartContext'

export const CartItem=({producto})=>{
    const{eliminarItem}=useCart()
    return(
        <div>
            <h4>{producto.nombre}</h4>
            <img src= {producto.img} alt={producto.nombre}></img>
            <p>{producto.precio}</p>
            <p>{producto.cantidad}</p>
            <button onClick={()=>eliminarItem(producto.id)}>Eliminar producto</button>
        </div>
    )
}