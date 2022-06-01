import './App.css';
import NavBar from './components/NavBar/NavBar';
import productos from './utils/mock';
import CardList from './components/Item/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='Card-pantalla'>
        <CardList titulo = {'PRODUCTOS'} products={productos}/>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
