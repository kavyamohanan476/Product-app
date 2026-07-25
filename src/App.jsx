import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Product from './pages/Product'
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
