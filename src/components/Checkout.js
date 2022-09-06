import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../firebase/Firebase";
import { useCart } from "./CartContext";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navegar = useNavigate();
  const { cart, totalCarrito, vaciarCarrito } = useCart();
  const [cliente, setCliente] = useState({});
  const [orderId, setOrderId] = useState("");
  const datosCliente = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (Object.values(cliente).length !== 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completa el formulario para finalizar la compra",
      });
    } else {
      const colleccionCompra = collection(db, "Compras");
      addDoc(colleccionCompra, {
        cliente,
        items: cart,
        total: totalCarrito(),
        fecha: serverTimestamp(),
      }).then((res) => {
        setOrderId(res.id);
        vaciarCarrito();
      });
    }
  };
  return (
    <>
      {!orderId ? (
        <div className="checkout container">
          <h2>Por favor completar con sus datos para finalizar la compra</h2>
          <form className="formCheckout" onSubmit={finalizarCompra}>
            <div className="form-group">
              <label for="nombre">Nombre completo</label>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre Completo"
                name="nombre"
                id="nombre"
                onChange={datosCliente}
              />
            </div>
            <div className="form-group">
              <label for="telefono">Celular</label>
              <input
                className="form-control"
                type="number"
                placeholder="Numero de Telefono"
                name="telefono"
                id="telefono"
                onChange={datosCliente}
              />
            </div>
            <div className="form-group">
              <label for="email">E-mail</label>
              <input
                className="form-control"
                type="email"
                placeholder="EMAIL"
                name="email"
                id="email"
                onChange={datosCliente}
              />
            </div>
            <button className="btn btn-success" type="submit">
              FINALIZAR COMPRA
            </button>
          </form>
        </div>
      ) : 
      <div className="compraFinalizada container">
        <h1>Muchas Gracias por su compra</h1>
        <h2>Nos estaremos comunicando a la brevedad</h2>
        <h3>{`ID de su orden de compra:   ${orderId}`}</h3>
        <button type="button" className="btn btn-success" onClick={()=>{navegar('/productos')}}>Volver al listado de productos</button>
        </div>}
    </>
  );
};
