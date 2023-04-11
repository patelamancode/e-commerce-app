import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import WishList from './Pages/WishList';
import ProductDetail from './components/ProductDetail';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/product/id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/wishlist' element={<WishList />}/>
      </Routes>
    </div>
  );
}

export default App;
