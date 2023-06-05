import "../assets/styles/shop.css"
import React, { useState } from "react";
import data from "../data";

const Shop = ({addToCart}) => {
 

    return (
      <>
        {data.map(book => {
          return (
            <div key={book.id} id="bookShop">
              <div className="bookCard">
                <Book image={book.image} title={book.title} author={book.author}/>
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
          <input type="number"></input>
      </div>
    </>
  );
}

export default Shop;