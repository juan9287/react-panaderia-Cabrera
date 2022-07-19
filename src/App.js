
import './App.css';
import ItemListContainer from './components/ItemListContainer';

import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="PROPIEDAD GREETINGS"/>
      
    </div>
  );
}

export default App;
