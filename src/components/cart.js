import "../assets/styles/cart.css"
import { Link } from "react-router-dom"
import deleteIcon from "../assets/images/bin.svg"

const Cart = ({cart, increase, decrease, remove, removeAll, change}) => {
  const totalPrice = (cart.reduce((sum, {amount, price}) => sum + amount * price, 0));
  
  return (
    cart.length !== 0 ?
    <div id="cartWrapper">
      <div id="cart">
      <button id="removeAllButton" onClick={removeAll}>remove all</button>
      {cart.map(book => {
        return(
          <div key={book.id} className="bookInCart">
            <img src={book.image} alt={book.title} className="cartBookImage"></img>
            <div className="titleAndAuthor">
              <p className="title">{book.title}</p>
              <p className="author">{book.author}</p>
            </div>
            <p>{`$${book.price * book.amount}`}</p>
            <div className="inputBlock">
              <button className="cartInputButton" name={book.id} onClick={decrease}>-</button>
              <input className="inputInShop" name={book.id} onChange={(e) => change(e, book)} value={book.amount} type="number"></input>
              <button className="cartInputButton" name={book.id} onClick={increase}>+</button>
            </div>
            <img src={deleteIcon} alt="deleteIcon" className="deleteImage" name={book.id} onClick={remove}></img> 
          </div>
        )
        })}
        </div>
          <div id="payment">
            <p id="totalPriceText">Total price:</p>
            <p id="totalPrice">${totalPrice}</p>
            <button id="payButton">Pay</button>
          </div>
    </div>
    :
    <div id="emptyCartInfo">
      <p id="emptyCartText">Your cart is empty</p>
      <Link to="/shop" id="cartToShop">Fill it in!</Link>
    </div>
        
  );
};
  
export default Cart;