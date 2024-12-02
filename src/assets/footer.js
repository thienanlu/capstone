// import files
import './css/footer.css'

// import image
import logo from './img/Logo.svg'

function Footer(){
    return(
        <footer id="footer">
            <div className="footer-logo">
                <img src={logo} alt="footer-logo"/>
            </div>
            <div className="footer-col">
                <h3 className="footer-col-title">DOORMAT NAVIGATION</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
                </ul>
            </div>
            <div className="footer-col">
                <h3 className="footer-col-title">CONTACT INFO</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="footer-col">
                <h3 className="footer-col-title">SOCIAL MEDIA LINKS</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;