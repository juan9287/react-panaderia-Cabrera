import React from "react"
import {useNavigate} from 'react-router-dom'

export const ItemDetail = ({producto})=>{
    const {id}=producto
    const img = `./productos_img/producto_${id}.jpg`
    const back = useNavigate()
    

    return(
        <>
        <div>
            <img src={img} style={{width:"30rem"}} alt={producto.nombre}  ></img>
            <h1>{producto.nombre}</h1>
            <p >{producto.categoria}</p>
            <p >${producto.precio}</p>
            <p >stock:{producto.stock}</p>
        </div>
        <button className="btn" onClick={()=> back('/productos')}>Volver al listado</button>
        </>
    )

}