import {useCart} from './CartContext'

export const CartItem=({producto,item})=>{
    const{eliminarItem}=useCart()
    return(
        <tr className='cartItem'>
            <th scope="row">{item}</th>
            <td><img src= {producto.img} alt={producto.nombre}></img>
            <h4>{producto.nombre}</h4></td>
            <td><p>$ {producto.precio}</p></td>
            <td><p>X {producto.cantidad}</p></td>
            <td><p>$ {producto.cantidad * producto.precio}</p></td>
            <td><button type='button' className='btn btn-warning' onClick={()=>eliminarItem(producto.id)}>ELIMINAR PRODUCTO</button></td>
        </tr>
    )
}