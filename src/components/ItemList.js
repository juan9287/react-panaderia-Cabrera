import React from 'react'
import ItemCard from './ItemCard'

const ItemList = ({listaProductos}) => {
  
  return (
    <div className='container '>

    <div className='row row-cols-3 productos' >
        {listaProductos.map((producto)=> <ItemCard key={producto.id}  producto={producto}/>)}
    </div>
    </div>
  )
}

export default ItemList