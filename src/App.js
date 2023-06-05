import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import ShoppingCart from "./components/shoppingCart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shoppingCart">Shopping Cart</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;