import { useState } from "react"
import { useEffect } from "react"
import { data } from "./mock/FakeApi"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'





function ItemListContainer ({greetings}){
    const [listaProductos, setListaProductos]= useState([])
    const[mensaje, setMensaje] = useState(false)
    const {categoriaId} = useParams()
    
    

    useEffect(()=>{
        
        data
        .then((res)=>{if(!categoriaId){setListaProductos(res)}
        else{
            setListaProductos(res.filter((item)=>item.categoria===categoriaId))
        }} )
        .catch(()=> setMensaje('ERROR EN LA CARGA DE DATOS'))
        
    }, [categoriaId])


    return(

    <div className="container">
    <h1>{greetings}</h1>
    {mensaje && <p>{mensaje}</p>}

    <ItemList listaProductos={listaProductos}/>
    </div>
        
    )

}
export default ItemListContainer