import { Link, useNavigate } from "react-router-dom"
import "../assets/styles/Header.css"
import cartIcon from "../assets/images/cart.png"
import searchIcon from "../assets/images/magnifyingGlass.svg"
import { useState } from "react"
import data from "../data";

const Header = ({cart}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const onSearchSubmit = () => {
    if (data.some(item => item.title === search)){
      navigate(`./shop/${search}`)
    }else{
      navigate('./shop/*')
    }
  }

  const onSearchSubmitEnter = (e) => {
    if (e.key === "Enter" && data.some(item => item.title === search)){
      navigate(`./shop/${search}`)
    }
    else if (e.key === "Enter"){
      navigate('./shop/*')
    }
  }

    return(
        <nav>
          <ul id="headerLinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
          <div id="searchAndButton">
            <input 
              id="headerSearch" 
              onChange={handleSearch} 
              onKeyDown={onSearchSubmitEnter} 
              type="search"
            >
            </input>
            <button id="searchButton" onClick={onSearchSubmit}>
              <img id="searchIcon" src={searchIcon} alt="search"></img>
            </button>
          </div>
          <Link to="/cart" id="cartLink">
            <img id="cartIcon" src={cartIcon} alt="cart icon"></img>
            <div id="cartItemsNumber">{cart.length}</div>
          </Link>
        </nav>
    )
}

export default Header;