
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Cart } from './components/Cart';
import {CartProvider} from './components/CartContext'
import { Footer } from './components/Footer';
import { Checkout } from './components/Checkout';
import { Nosotros } from './components/Nosotros';
import { Contactanos } from './components/Contactanos';
import { Productos } from './components/Productos';

function App() {


  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<ItemListContainer greetings="Listado de productos"/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greetings="Listado de productos"/>}/>
        <Route path='/detail/:idProd' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='check' element={<Checkout/>}></Route>
        <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
        <Route path='/contactanos' element={<Contactanos/>}></Route>
        <Route path='/galeria' element={<Productos></Productos>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
