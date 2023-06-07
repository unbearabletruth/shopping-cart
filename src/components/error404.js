import { Link } from "react-router-dom"

const Error404 = () => {
    return(
        <>
            <p>404</p>
            <p>Page not found</p>
            <Link to="/">Home</Link>
        </>
    )
}

export default Error404;