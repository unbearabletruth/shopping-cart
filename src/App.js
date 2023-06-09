import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import {Book, BookNotFound} from "./components/Book";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import "./assets/styles/App.css"
import data from "./data";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    if (cart.some(item => item.id === book.id)){
      setCart(
        cart.map(item => 
          book.id === item.id ?
          {...item,
           amount: item.amount + book.amount,
          }
          : item)
      )
      return;
    }
    setCart(cart.concat(book))
  }

  const increaseItemAmount = (e) => {
    console.log(e.target.name)
    setCart(
      cart.map(item => 
        e.target.name === item.id ?
        {...item,
         amount: item.amount + 1,
        }
        : item)
    )
    return;
  }

  const decreaseItemAmount = (e) => {
    setCart(
      cart.map(item => 
        e.target.name === item.id && item.amount > 1 ?
        {...item,
         amount: item.amount - 1,
        }
        : item)
    )
    return;
  }

  const changeAmount = (e, book) => {
    console.log(book)
    setCart(
      cart.map(item => 
        book.id === item.id ?
        {...item,
         amount: parseInt(e.target.value),
        }
        : item)
    )
    return;
  }

  const remove = (e) => {
    setCart(cart.filter(item => item.id !== e.target.name))
  }

  const removeAll = () => {
    setCart([])
  }

  console.log("cart", cart)
  console.log('data', data)
  return (
    <HashRouter>
      <Header cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/shop/:id" element={<Book addToCart={addToCart}/>} />
        <Route path="/shop/*" element={<BookNotFound/>} />
        <Route path="/cart" element={<Cart cart={cart} 
          increase={increaseItemAmount}
          change={changeAmount} 
          decrease={decreaseItemAmount}
          remove={remove}
          removeAll={removeAll}
          />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
};

export default App;