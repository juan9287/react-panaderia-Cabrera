import React from 'react'
import ItemCount from './ItemCount'
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'
 

const ItemCard = ({producto}) => {
  
  const { nombre, id,precio , categoria, stock }= producto
  const navegar = useNavigate()
  const onAdd = (cantidad) => { 
    swal({
      title: "Felicitaciones",
      text: `Haz agregado ${cantidad} productos a tu carrito`,
      icon: "success",
    });
  }
const img = `../productos_img/producto_${id}.jpg`

  return (
    <div className="col card productosItem" style={{width: '30rem'}}>
    <img src={img} style={{height:'20rem'}}  className="card-img-top" alt={nombre} />
    <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Categoria: {categoria}</p>
        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Stock:{stock}</p>
        
    </div>
      <button className='btn' onClick={()=>navegar(`/detail/${id}`)}>Ver detalle</button>
      <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
      
  </div>

  )
}

export default ItemCard