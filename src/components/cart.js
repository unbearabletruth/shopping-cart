import "../assets/styles/cart.css"

const Cart = ({cart}) => {
    return (
      <div  id="cartWrapper">
        {cart.map(book => {
          return(
            <div key={book.id} className="bookInCart">
              <img src={book.image} alt={book.title} className="cartBookImage"></img>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>Amount: {book.amount}</p>
            </div>
          )
         })}  
      </div>
    );
  };
  
export default Cart;