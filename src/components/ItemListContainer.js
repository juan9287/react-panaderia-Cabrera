import { useState } from "react"
import { useEffect } from "react"
import { data } from "./mock/FakeApi"
import ItemList from "./ItemList"




function ItemListContainer ({greetings}){
    const [listaProductos, setListaProductos]= useState([])
    const[mensaje, setMensaje] = useState(false)
    

    useEffect(()=>{
        
        data
        .then((res)=> setListaProductos(res))
        .catch(()=> setMensaje('ERROR EN LA CARGA DE DATOS'))
        .finally(()=> console.log(`USO DE FINALLY`))
    }, [])


    return(

    <div className="container"><h1>{greetings}</h1>
    {mensaje && <p>{mensaje}</p>}
    <ItemList listaProductos={listaProductos}/></div>
        
    )

}
export default ItemListContainer