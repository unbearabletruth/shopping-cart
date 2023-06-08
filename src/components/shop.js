import "../assets/styles/shop.css"
import React, { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom"

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
            <Link to={`/shop/${book.id}`}>
              <div className="bookInfoShop">
                <img src={book.image} alt={book.title} className="shopBookImage"></img>
                <p className="titleShop">{book.title}</p>
                <p className="authorShop">{book.author}</p>
                <p className="priceShop">{`$${book.price.toFixed(2)}`}</p>
              </div>
            </Link>
            <div className="inputWrapper">
              <button onClick={() => addToCart(book)} className="toCartButton">Add to cart</button>
              <input className="inputInShop" name={book.id} onChange={handleAmount} value={book.amount} type="number"></input>
              <div className="inputButtons">
                <button className="inputButtons" name={book.id} onClick={increase}>+</button>
                <button className="inputButtons" name={book.id} onClick={decrease}>-</button>
              </div>
            </div>
          </div>
        )
      })} 
    </div>
  );
};

export default Shop;