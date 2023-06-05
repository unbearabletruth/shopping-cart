import images from '../assets/images/exportAll.js'
import React, { useState } from "react";
import uniqid from "uniqid";

const Shop = ({cart, addToCart}) => {
  const [items, setItems] = useState([
    {image: images["Behave.jpg"], title:"Behave", author:"Robert Sapolsky", id: uniqid()},
  ])

    return (
      <>
        {items.map(book => {
          return (
            <div key={book.id}>
              <Book image={book.image} title={book.title} author={book.author}/>
              <button onClick={() => addToCart(book)}>Add to cart</button>
            </div>
          )
        })} 
      </>
    );
  };

const Book = ({image, title, author}) => {
  return (
    <>
      <div>
          <img src={image} alt={title}></img>
          <p>{title}</p>
          <p>{author}</p>
          <input type="number"></input>
      </div>
    </>
  );
}

export default Shop;