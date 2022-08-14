import React from 'react'
import { Link } from 'react-router-dom'
import cartWidget from '../Imagenes/shopping-cart.png'
import { useCart } from './CartContext'
const CartWidget= ()=> {
const {cantidadProductos}= useCart()
return(<Link to='/cart'>
    <img className="cartImg"src={cartWidget}style={{width:"30rem",height:"100%"}} alt=""></img>
    <span>{cantidadProductos()|| ''} </span>
    </Link>)
}

export default CartWidget