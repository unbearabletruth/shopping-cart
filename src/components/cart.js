import "../assets/styles/Cart.css"
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
          <div key={book.id} className="bookInCart" data-testid="bookInCart">
            <img src={book.image} alt={book.title} className="cartBookImage"></img>
            <div className="titleAndAuthor">
              <p className="titleCart">{book.title}</p>
              <p className="authorCart">{book.author}</p>
            </div>
            <div className="priceBlock">
              {book.amount > 1 ?
                <>
                  <p className="priceForOne">One: ${book.price.toFixed(2)}</p>
                  <p>Total: {`$${(book.price * book.amount).toFixed(2)}`}</p>
                </>
              : 
                <p className="priceCart">${book.price.toFixed(2)}</p>}
              
            </div>
            <div className="inputBlock">
              <button className="cartInputButton" name={book.id} onClick={decrease}>-</button>
              <input className="inputInShop" name={book.id} onChange={(e) => change(e, book)} value={book.amount} type="number"></input>
              <button className="cartInputButton" name={book.id} onClick={increase}>+</button>
            </div>
            <img src={deleteIcon} alt="deleteIcon" className="deleteImage" name={book.id} onClick={remove} aria-label={book.author}></img> 
          </div>
        )
        })}
        </div>
          <div id="payment">
            <p id="totalPriceText">Order total</p>
            <p id="totalPrice">${totalPrice.toFixed(2)}</p>
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