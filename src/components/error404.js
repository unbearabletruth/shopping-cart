import { Link } from "react-router-dom"
import "../assets/styles/error404.css"

const Error404 = () => {
    return(
        <div id="errorWrapper">
            <p id="errorNumber">404</p>
            <p id="errorMessage">Sorry, but your page is not found</p>
            <Link to="/" id="errorToHome">Home</Link>
        </div>
    )
}

export default Error404;