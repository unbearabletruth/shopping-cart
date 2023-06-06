import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";
import "./assets/styles/App.css"
import data from "./data";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    if (cart.some(item => item.id === book.id)){
      setCart(
        cart.map(item => {
          if(book.id === item.id){
            return {...item, amount: item.amount + 1}
          }
          return item;
        })
      )
      return;
    }
    setCart(cart.concat(book))
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
          <div><Link to="/cart">Cart ({cart.length})</Link></div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cart={cart}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;