import "../assets/styles/cart.css"

const Cart = ({cart, increase, decrease, remove}) => {
    return (
      <div id="cartWrapper">
        {cart.map(book => {
          return(
            <div key={book.id} className="bookInCart">
              <img src={book.image} alt={book.title} className="cartBookImage"></img>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>Amount: {book.amount}</p>
              <button name={book.id} onClick={increase}>+</button>
              <button name={book.id} onClick={decrease}>-</button>
              <button name={book.id} onClick={remove}>remove</button> 
            </div>
          )
         })}  
      </div>
    );
  };
  
export default Cart;