import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';
import productos from './components/Item/ItemList';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='Card-pantalla'>
        <CardList titulo = {'PRODUCTOS'} products={productos}/>
      </div>
    </div>
  );
}

export default App;
