import {createContext, useContext, useState } from "react"


export const CartContext=createContext()
export const CartProvider = ({children})=>{
    const [cart,setCart]= useState([])
    const addToCart=(item)=>{
        const itemInCart = cart.some((prod)=>prod.id===item.id)
        if(itemInCart){
            const updateCart = cart.map((prod)=> {
                if(prod.id===item.id){
                    return{...prod,cantidad:prod.cantidad+item.cantidad}
                    
                   
                } else{
                    return prod
                }})
                setCart(updateCart)

        }else{
            setCart([...cart,item])}
        
        
    }

    const vaciarCarrito=()=>{
        setCart([])
    }

    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id===id)

    }
    const eliminarItem =(id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))

    }
    const cantidadProductos = ()=>{
        return cart.reduce((acc,prod)=> acc+=prod.cantidad,0)
    }

    const totalCarrito =()=>{
        return cart.reduce((acc,prod)=> acc+=prod.precio*prod.cantidad,0)
    }




    return(
        <CartContext.Provider value={{cart, addToCart,vaciarCarrito,isInCart, eliminarItem,cantidadProductos,totalCarrito}} >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=> useContext(CartContext)