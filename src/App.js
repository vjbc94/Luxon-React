import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer/>} />
            <Route path='/categoria/:id' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
       
      </div>
    </>

  );
}

export default App;
