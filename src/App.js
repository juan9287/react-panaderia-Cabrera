
import './App.css';

import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App container">
      <NavBar/>
      <ItemListContainer greetings="Listado de productos"/>
      <ItemCount></ItemCount>
      
    </div>
  );
}

export default App;
