import "../assets/styles/Footer.css"
import instagramIcon from "../assets/images/instagram.svg"
import twitterIcon from "../assets/images/twitter.svg"

const Footer = () => {
    return (
        <div id="footer">
            <ul id="footerInfo">
                <li className="footerInfoList">About us</li>
                <li className="footerInfoList">Polices</li>
                <li className="footerInfoList">Help</li>
                <li className="footerInfoList">Want to work with us?</li>
            </ul>
            <div id="socials">
                <p>Our socials</p>
                <div id="icons">
                    <img src={instagramIcon} alt="instagram" className="socialsIcon"></img>
                    <img src={twitterIcon} alt="twitter" className="socialsIcon"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer;