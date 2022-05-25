import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/productDetails';
import getProducts from './redux/Action';
import Products from './components/products';
import Cart from './components/Cart';
import Navbar from './components/navbar';

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Products />} />
        <Route path="/" element={<Products />} />
        <Route path="productdetails/" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
