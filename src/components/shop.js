import "../assets/styles/shop.css"
import React, { useState } from "react";
import data from "../data";

const Shop = ({addToCart}) => {
  const [shopItems, setShopItems] = useState(data);
  
  const handleAmount = (e) => {
    setShopItems(
      shopItems.map(item => 
        e.target.name === item.id ?
        {...item, amount: parseInt(e.target.value)}
        : item)
    )
    return;
  }

  const increase = (e) => {
    setShopItems(
      shopItems.map(item => 
        e.target.name === item.id ?
        {...item, amount: item.amount + 1}
        : item)
    )
    return;
  }

  const decrease = (e) => {
    setShopItems(
      shopItems.map(item => 
        e.target.name === item.id && item.amount > 1 ?
        {...item, amount: item.amount - 1}
        : item)
    )
    return;
  }

  console.log("shop", shopItems)
  return (
    <div id="bookShop">
      {shopItems.map(book => {
        return (
          <div key={book.id} className="bookInShop">
            <div className="bookInfo">
              <img src={book.image} alt={book.title} className="shopBookImage"></img>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
            <div className="inputWrapper">
              <input className="bookInShop" name={book.id} onChange={handleAmount} value={book.amount} type="number"></input>
              <div className="inputButtons">
                <button name={book.id} onClick={increase}>+</button>
                <button name={book.id} onClick={decrease}>-</button>
              </div>
            </div>
            <button onClick={() => addToCart(book)}>Add to cart</button>
          </div>
        )
      })} 
    </div>
  );
};

export default Shop;