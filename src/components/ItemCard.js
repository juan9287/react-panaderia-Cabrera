


import {useNavigate} from 'react-router-dom'
 

const ItemCard = ({producto}) => {
  
  const { nombre, id,precio , categoria, stock }= producto
  const navegar = useNavigate()

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
      
      
  </div>

  )
}

export default ItemCard