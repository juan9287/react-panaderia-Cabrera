import gorro from '../Imagenes/gorro.png'
import CartWidget from './CartWidget'

function NavBar(){
    return(
    <header className='container headerApp'>
        <nav className=' navbar navbar-expand-lg bg-light'>
            <div className='row container-fluid'>
            <picture className='col navbar-brand'>
                
            <img className="brandImg" src={gorro} alt=""></img>
                
            </picture>
            <div className='col '>
                <ul className=' row navbar-nav'> 
                    <li className='nav-item col'><a href="https://www.google.com">Nosotros</a></li>
                    <li className='nav-item col'><a href="https://www.google.com">Productos</a></li>
                    <li className='nav-item col'><a href="https://www.google.com">Contactanos</a></li>
                    <li className='nav-item col'><a href="https://www.google.com">Tienda</a></li>
                </ul>
            </div>
            </div>
            <CartWidget/>
        </nav>
    </header>)
}
export default NavBar