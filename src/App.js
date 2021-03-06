import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductList from './pages/productos';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart'
function App() {
  return (
    <>
      <div className="App">
        <CartProvider>
          <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/productos/:categoria' element={<ProductList />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>

      </div>
    </>

  );
}

export default App;
