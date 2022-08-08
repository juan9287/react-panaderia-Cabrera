import React from "react";
import { useEffect, useState } from "react";
import { data } from "./mock/FakeApi";
import { ItemDetail } from "./ItemDetail";
import {useParams} from 'react-router-dom'


export const ItemDetailContainer = ()=>{
    const [producto,setProducto]= useState({})
    const {idProd}= useParams()
    
    useEffect(()=>{
        data.then((res)=>setProducto(res.find((item)=>item.id===idProd)));

    },[idProd])

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
        
    )
}