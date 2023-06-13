import "../assets/styles/Book.css"
import React, { useEffect, useState } from "react";
import data from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

const Book = ({addToCart}) => {
  const {id} = useParams();
  const [currentBook, setCurrentBook] = useState(data.find((item) => item.id === id))
  
  useEffect(() => {
    const book = data.find((item) => item.title === id);
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
    <div key={currentBook.id} className="bookWrapper">
      <div className="book">
        <img 
          src={currentBook.image} 
          alt={currentBook.title} 
          className="bookImage"
        >
        </img>
        <div className="bookInfo">
          <p className="title">{currentBook.title}</p>
          <p className="author">{currentBook.author}</p>
          <p className="description">{currentBook.description}</p>
          <p className="price">Price: ${currentBook.price.toFixed(2)}</p>
          <div className="inputWrapper">
            <button 
              onClick={() => addToCart(currentBook)} 
              className="toCartButton"
            >
              Add to cart
            </button>
            <label for="amountInput">Amount</label>
            <input 
              id="amountInput"
              className="inputInShop" 
              name={currentBook.id} 
              onChange={handleAmount} 
              value={currentBook.amount} 
              type="number"
            >
            </input>
            <div className="inputButtons">
              <button 
                className="inputButtons" 
                name={currentBook.id} 
                onClick={increase}
              >
                +
              </button>
              <button 
                className="inputButtons" 
                name={currentBook.id} 
                onClick={decrease}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
     : 
    <BookNotFound/>
  );
};

const BookNotFound = () => {
  return (
      <div id="bookNotFound">
          <p id="notFoundMessage">Sorry, but the book is not found!</p>
          <Link to="/shop" id="backToShop">Look for another book</Link>
      </div>
  )
}

export {Book, BookNotFound};