
import './App.css';


import ItemListContainer from './components/ItemListContainer';

import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App container">
      <NavBar/>
      <ItemListContainer greetings="Listado de productos"/>
      
      
    </div>
  );
}

export default App;
