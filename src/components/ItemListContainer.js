import { useState } from "react"
import { useEffect } from "react"

import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'

import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/Firebase"





function ItemListContainer ({greetings}){
    const [listaProductos, setListaProductos]= useState([])
    
    const {categoriaId} = useParams()
    
    

    useEffect(()=>{
        
        const datos = categoriaId ? query(collection(db,"Items"), where("categoria","==",categoriaId))
        : collection(db,"Items")

        console.log(datos)

        getDocs(datos)
        .then((result)=>{
            const lista = result.docs.map((producto)=>{
                return{
                    id: producto.id,
                    ...producto.data()
                }
            })
            setListaProductos(lista)
            

        })
        

        /*data
        .then((res)=>{if(!categoriaId){setListaProductos(res)}
        else{
            setListaProductos(res.filter((item)=>item.categoria===categoriaId))
        }} )
        .catch(()=> setMensaje('ERROR EN LA CARGA DE DATOS'))*/
        
    }, [categoriaId])
    console.log(listaProductos)

    return(

    <div className="container">
    <h1 style={{"textAlign":"center", "paddingTop":"2rem", "fontSize":"4em"}}>{greetings}</h1>
    

    <ItemList listaProductos={listaProductos}/>
    </div>
        
    )

}
export default ItemListContainer