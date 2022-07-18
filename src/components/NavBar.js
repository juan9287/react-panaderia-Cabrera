import gorro from '../Imagenes/gorro.png'

function NavBar(){
    return(
    <header className='headerApp'>
        <nav className=' navbar navbar-expand-lg bg-light'>
            <div className='row container-fluid'>
            <picture className='col navbar-brand'>
                
            <img className="brandImg" src={gorro} alt=""></img>
                
            </picture>
            <div className='col '>
                <ul className=' row navbar-nav'> 
                    <li className='nav-item col'><a href="https://www.google.com">Nosotros</a></li>
                    <li className='nav-item col'><a href="https://www.google.com">Productos</a></li>
                    <li className='nav-item col'><a href="https://www.google.com">Tienda</a></li>
                    <li className='nav-item col'><a href="https://www.google.com">Contactanos</a></li>
                </ul>
            </div>
            </div>
        </nav>
    </header>)
}
export default NavBar