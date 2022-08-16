import {useCart} from './CartContext'

export const CartItem=({producto})=>{
    const{eliminarItem}=useCart()
    return(
        <div className='cartItem'>
            <img src= {producto.img} alt={producto.nombre}></img>
            <h4>{producto.nombre}</h4>
            <p>{producto.precio}</p>
            <p>{producto.cantidad}</p>
            <button className='btn' onClick={()=>eliminarItem(producto.id)}>Eliminar producto</button>
        </div>
    )
}