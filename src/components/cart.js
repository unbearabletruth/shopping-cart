import "../assets/styles/cart.css"
import { Link } from "react-router-dom"

const Cart = ({cart, increase, decrease, remove, removeAll, change}) => {
  const totalPrice = (cart.reduce((sum, {amount, price}) => sum + amount * price, 0));
  
  return (
    cart.length !== 0 ?
    <div id="cartWrapper">
      <button onClick={removeAll}>remove all</button>
      <div id="cart">
      {cart.map(book => {
        return(
          <div key={book.id} className="bookInCart">
            <img src={book.image} alt={book.title} className="cartBookImage"></img>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>Amount: {book.amount}</p>
            <p>{`$${book.price * book.amount}`}</p>
            <button name={book.id} onClick={increase}>+</button>
            <input className="inputInShop" name={book.id} onChange={(e) => change(e, book)} value={book.amount} type="number"></input>
            <button name={book.id} onClick={decrease}>-</button>
            <button name={book.id} onClick={remove}>remove</button> 
          </div>
        )
        })}
        </div>
          <div className="payment">
            <p>Total price: {totalPrice}</p>
            <button>Pay</button>
          </div>
    </div>
    :
    <div className="emptyCartInfo">
      <p>Your cart is empty</p>
      <Link to="/shop" id="cartToShop">Shop</Link>
    </div>
        
  );
};
  
export default Cart;