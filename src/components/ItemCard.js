



import {useNavigate} from 'react-router-dom'

 

const ItemCard = ({producto}) => {
  
  const { nombre, id,precio , categoria, stock,img }= producto
  const navegar = useNavigate()
  
 

  return (
    <div className="card itemCard" >
    <img src={img}   className="card-img-top" alt={nombre} />
    <div className="card-body">
        <h1 className="card-title" >{nombre}</h1>
        <p className="card-text">Categoria: {categoria}</p>
        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Stock:{stock}</p>
        
    </div>
      <button className='btn' onClick={()=>navegar(`/detail/${id}`)}>Ver detalle</button>
      
      
  </div>

  )
}

export default ItemCard