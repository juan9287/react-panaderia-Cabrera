import { useState } from "react"
import { useEffect } from "react"
import { data } from "./mock/FakeApi"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'




function ItemListContainer ({greetings}){
    const [listaProductos, setListaProductos]= useState([])
    const[mensaje, setMensaje] = useState(false)
    const {categoriaId} = useParams()
    const navegar = useNavigate()
    

    useEffect(()=>{
        
        data
        .then((res)=>{if(!categoriaId){setListaProductos(res)}
        else{
            setListaProductos((res)=>res.filter((prod)=>prod.categoria===categoriaId))
        }} )
        .catch(()=> setMensaje('ERROR EN LA CARGA DE DATOS'))
        .finally(()=> console.log(`USO DE FINALLY`))
    }, [categoriaId])


    return(

    <div className="container">
    <h1>{greetings}</h1>
    {mensaje && <p>{mensaje}</p>}
    <nav>
        <ul>
        <button onClick={()=>navegar(`/categoria/Tortas`)}>Tortas</button>
        <button onClick={()=>navegar(`/categoria/Panaderia`)}>Panaderia</button>
        <button onClick={()=>navegar(`/categoria/Sandwiches`)}>Sandwiches</button>
        <button onClick={()=>navegar(`/categoria/Catering`)}>Catering</button>
        </ul>
        </nav>
    <ItemList listaProductos={listaProductos}/>
    </div>
        
    )

}
export default ItemListContainer