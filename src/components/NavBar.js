
import React from 'react'
import gorro from '../Imagenes/gorro.png'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
    <header className='container headerApp'>
        <nav className=' navbar navbar-expand-lg bg-light'>
            <div className='row container-fluid'>
            <picture className='col navbar-brand'>
                
            <Link to ='/'><img className="brandImg" src={gorro} alt=""></img></Link>
                
            </picture>
            <div className='col '>
                <ul className=' row navbar-nav'> 
                    <li className='nav-item col'><Link to ='/'>Nosotros</Link></li>
                    <li className='nav-item col'><Link to ='/'>Contactanos</Link></li>
                    <li className='nav-item col'><Link to ='/'>Tienda</Link></li>
                    <li className='nav-item col'><Link to ='/productos'>Productos</Link></li>
                </ul>
                
            </div>
            
            </div>
            <CartWidget/>
        </nav>
    </header>)
}
export default NavBar