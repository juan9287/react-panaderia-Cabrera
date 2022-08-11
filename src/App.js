
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Cart } from './components/Cart';
import {CartProvider} from './components/CartContext'

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
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
