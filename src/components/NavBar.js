
import React from 'react'
import gorro from '../Imagenes/gorro.png'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'


function NavBar(){

    return(
    <header className= 'navBarApp'>
        
        <nav className=' container navBar navbar navbar-expand-lg '>
            <div className='navBar container-fluid navbar-default'>
            <picture className=' navbar-brand'>
                
            <Link to ='/'><img className="brandImg" src={gorro} alt=""></img></Link>
                
            </picture>
            
            <ul className='navbar-nav navBarLinks'> 
                <li className='nav-item '><Link to ='/nosotros'>Nosotros</Link></li>
                <li className='nav-item '><Link to ='/contactanos'>Contactanos</Link></li>
                <li className='nav-item '><Link to ='/galeria'>Productos</Link></li>
                <li className='nav-item dropdown'>
                <li  className='nav-item dropdown-toggle' data-bs-toggle="dropdown" style={{"cursor":"pointer"}}>Tienda</li>
                <ul className='navBarDropdown dropdown-menu'>
                
                    <Link to ='/productos'className='dropdown-item' >Todos los productos</Link>
                    <Link to='/categoria/Tortas' className='dropdown-item'>Tortas</Link>
                    <Link to='/categoria/Panaderia' className='dropdown-item'>Panaderia</Link>
                    <Link to='/categoria/Sandwiches' className='dropdown-item'>Sandwiches</Link>
                    <Link to='/categoria/Catering' className='dropdown-item'>Catering</Link>
                </ul>
                
                </li>
                <CartWidget/>
            </ul>
                
           
            
            </div>
            
        </nav>
        
    </header>)
}
export default NavBar