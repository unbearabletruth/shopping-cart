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

  const sortByTitle = () => {
    setShopItems([...shopItems].sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }));
  }

  const sortByPrice = () => {
    setShopItems([...shopItems].sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }));
  }

  console.log("shop", shopItems)
  return (
    <div id="bookShop">
      <SortDropdown byPrice={sortByPrice} byTitle={sortByTitle}/>
      <div id="allBooks">
        {shopItems.map(book => {
          return (
            <div key={book.id} className="bookInShop">
              <Link to={`/shop/${book.title}`}>
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
    </div>
  );
};

const SortDropdown = ({byPrice, byTitle}) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [sortText, setSortText] = useState("Sort by...")

  const handleToggle = () => {
    setDropdownStatus(!dropdownStatus);
  };

  const changeSortTitle = (e) => {
    setSortText(e.target.textContent)
  }

  return (
    <div className={`dropdown ${dropdownStatus ? "active" : ""}`} onClick={handleToggle}>
      <input className="text-box" type="text" placeholder={sortText} readOnly></input>
      <div className="options">
        <div onClick={(e) => {byTitle(); changeSortTitle(e)}}>Title</div>
        <div onClick={(e) => {byPrice(); changeSortTitle(e)}}>Price</div>
      </div>
    </div>
  )
}

export default Shop;