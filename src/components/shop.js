import "../assets/styles/shop.css"
import React, { useState, useEffect } from "react";
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
  
  console.log("shop", shopItems)
  return (
    <>
      {shopItems.map(book => {
        return (
          <div key={book.id} id="bookShop">
            <div className="bookCard">
              <Book image={book.image} title={book.title} author={book.author}/>
              <input name={book.id} onChange={handleAmount} type="number"></input>
              <button onClick={() => addToCart(book)}>Add to cart</button>
            </div>
          </div>
        )
      })} 
    </>
  );
};

const Book = ({image, title, author}) => {
  return (
    <>
      <div className="bookInfo">
          <img src={image} alt={title} className="shopBookImage"></img>
          <p>{title}</p>
          <p>{author}</p>
      </div>
    </>
  );
}

export default Shop;