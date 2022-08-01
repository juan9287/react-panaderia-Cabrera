
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App container">
      <NavBar/>
      <ItemListContainer greetings="Listado de productos"/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
