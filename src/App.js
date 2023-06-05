import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart(cart.concat(book))
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart{cart.length}</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cart={cart}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;