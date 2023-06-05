const Cart = ({cart}) => {

    return (
      <>
        {cart.map(book => {
            return(
                <div key={book.id}>
                    <img src={book.image} alt={book.title}></img>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.amount}</p>
                </div>
            )
         })}  
      </>
    );
  };
  
export default Cart;