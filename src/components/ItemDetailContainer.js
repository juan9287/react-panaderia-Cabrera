import React from "react";
import { useEffect, useState } from "react";

import { ItemDetail } from "./ItemDetail";
import {useParams} from 'react-router-dom'
import { collection, doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/Firebase";


export const ItemDetailContainer = ()=>{
    const [producto,setProducto]= useState({})
    const {idProd}= useParams()
    
    useEffect(()=>{
        //data.then((res)=>setProducto(res.find((item)=>item.id===idProd)));
        const colleccion = collection(db, "Items")
        const ref = doc(colleccion,idProd)
        getDoc(ref).then((ref)=>{
            setProducto({
                id:ref.id,
                ...ref.data()
            })
        }

        )
    },[idProd]) 

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
        
    )
}