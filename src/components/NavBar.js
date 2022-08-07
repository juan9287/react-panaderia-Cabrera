
import React from 'react'
import gorro from '../Imagenes/gorro.png'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'


function NavBar(){
    
    return(
    <header className= 'headerApp'>
        <div className='container'>
        <nav className=' navbar navbar-expand-lg bg-light'>
            <div className=' container-fluid'>
            <picture className=' navbar-brand'>
                
            <Link to ='/'><img className="brandImg" src={gorro} alt=""></img></Link>
                
            </picture>
            
            <ul className='navbar-nav d-flex justify-content-between'> 
                <li className='nav-item '><Link to ='/'>Nosotros</Link></li>
                <li className='nav-item '><Link to ='/'>Contactanos</Link></li>
                <li className='nav-item '><Link to ='/'>Tienda</Link></li>
                <li className='nav-item dropdown'>
                <li  className='nav-item dropdown-toggle' data-bs-toggle="dropdown" >Productos </li>
                <ul className='dropdown-menu'>
                
                    <Link to ='/productos'className='dropdown-item' >Todos los productos</Link>
                    <Link to='/categoria/Tortas' className='dropdown-item'>Tortas</Link>
                    <Link to='/categoria/Panaderia' className='dropdown-item'>Panaderia</Link>
                    <Link to='/categoria/Sandwiches' className='dropdown-item'>Sandwiches</Link>
                    <Link to='/categoria/Catering' className='dropdown-item'>Catering</Link>
                </ul>
                </li>
            </ul>
                
           
            
            </div>
            <CartWidget/>
        </nav>
        </div>
    </header>)
}
export default NavBar