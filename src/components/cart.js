import "../assets/styles/cart.css"

const Cart = ({cart, increase, decrease, remove}) => {
  const totalPrice = (cart.reduce((sum, {amount, price}) => sum + amount * price, 0));
  
  return (
    <div id="cartWrapper">
      <div id="cart">
      {cart.map(book => {
        return(
          <>
            <div key={book.id} className="bookInCart">
              <img src={book.image} alt={book.title} className="cartBookImage"></img>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>Amount: {book.amount}</p>
              <p>{`$${book.price * book.amount}`}</p>
              <button name={book.id} onClick={increase}>+</button>
              <button name={book.id} onClick={decrease}>-</button>
              <button name={book.id} onClick={remove}>remove</button> 
            </div>
          </>
        )
        })}
        </div>
        <div className="payment">
          <p>Total price: {totalPrice}</p>
          <button>Pay</button>
        </div>  
    </div>
  );
};
  
export default Cart;