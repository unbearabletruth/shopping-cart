import "../assets/styles/shop.css"
import React, { useEffect, useState } from "react";
import data from "../data";
import { useParams } from "react-router-dom";

const Book = ({addToCart}) => {
  const {id} = useParams();
  const [currentBook, setCurrentBook] = useState(data.find((item) => item.id === id))
  
  useEffect(() => {
    const book = data.find((item) => item.id === id);
    setCurrentBook(book);
  }, [id]);

  const handleAmount = (e) => {
    setCurrentBook({
      ...currentBook,
      amount: e.target.value
    })
  }

  const increase = () => {
    setCurrentBook({
      ...currentBook,
      amount: currentBook.amount + 1
    })
  }

  const decrease = () => {
    if (currentBook.amount > 1){
      setCurrentBook({
        ...currentBook,
        amount: currentBook.amount - 1
      })
    }
  }

  return (
    currentBook !== undefined ?
    <div key={currentBook.id} className="book">
        <div className="bookInfo">
          <img src={currentBook.image} alt={currentBook.title} className="shopBookImage"></img>
          <p className="title">{currentBook.title}</p>
          <p className="author">{currentBook.author}</p>
        </div>
        <div className="inputWrapper">
          <button onClick={() => addToCart(currentBook)} className="toCartButton">Add to cart</button>
          <label>Amount</label>
          <input className="bookInShop" name={currentBook.id} onChange={handleAmount} value={currentBook.amount} type="number"></input>
          <div className="inputButtons">
            <button className="inputButtons" name={currentBook.id} onClick={increase}>+</button>
            <button className="inputButtons" name={currentBook.id} onClick={decrease}>-</button>
          </div>
        </div>
    </div>
     : 
    <div>Sorry, but the book is not found!</div>
  );
};

export default Book;