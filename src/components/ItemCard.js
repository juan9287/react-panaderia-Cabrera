import React, { useState } from 'react'
import ItemCount from './ItemCount'





const ItemCard = ({producto}) => {
  const[mensaje, setMensaje] = useState(false)
  const { nombre, id , precio , categoria, stock }= producto
  console.log(producto.id)
  const onAdd = (cantidad) => { 
    setMensaje(`Agregaste ${cantidad} items en el carrito`)
  }

  return (
    <div className="card " style={{width: '18rem' ,display:'flex',justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
    <img src={`../Imagenes/productos_img/producto_${id}.jpg`}className="card-img-top" alt={nombre}/>
    <div className="card-body">
        <p className="card-text">{nombre}</p>
        <p className="card-text">{categoria}</p>
        <p className="card-text">${precio}</p>
        <p className="card-text">stock:{stock}</p>
        
    </div>
      {mensaje && <p>{mensaje}</p>}
      <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
  </div>

  )
}

export default ItemCard