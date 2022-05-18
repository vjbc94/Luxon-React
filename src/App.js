import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='Card-pantalla'>
        <CardList titulo = {'PRODUCTOS'}/>
      </div>
      
    </div>
  );
}

export default App;
