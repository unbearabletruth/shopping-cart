import background from "../assets/images/homeBackground.jpg"
import "../assets/styles/home.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
      <>
        <div id="homeWrapper">
            <img id="homeBackground" src={background} alt="background"></img>
            <div id="homeInfo">
              <p id="homeText">Check out our books!</p>
              <Link to="/shop" id="homeToShop">Shop</Link>
            </div>
            
        </div>
      </>  
    );
  };
  
export default Home;