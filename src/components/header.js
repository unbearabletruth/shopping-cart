import { Link } from "react-router-dom"
import "../assets/styles/header.css"
import cartIcon from "../assets/images/cart.png"

const Header = ({cart}) => {
    return(
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
          <Link to="/cart" id="cartLink">
            <img id="cartIcon" src={cartIcon} alt="cart icon"></img>
            <div id="cartItemsNumber">{cart.length}</div>
          </Link>
        </nav>
    )
}

export default Header;