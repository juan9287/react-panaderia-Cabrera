export const ItemDetail = ({producto})=>{
    const {id}=producto
    const img = `./productos_img/producto_${id}.jpg`

    return(

        <div>
            <img src={img} style={{width:"30rem"}} alt={producto.nombre}  ></img>
            <h1>{producto.nombre}</h1>
            <p >{producto.categoria}</p>
            <p >${producto.precio}</p>
            <p >stock:{producto.stock}</p>
        </div>
    )

}