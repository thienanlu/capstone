// import files
import '../assets/css/footer.css'
import { Link } from 'react-router-dom';

// import image
import logo from '../assets/img/Logo.svg'

function Footer(){
    return(
        <footer id="footer">
            <div className="footer-logo">
                <img src={logo} alt="footer-logo"/>
            </div>
            <div className="footer-col">
                <h3 className="footer-col-title">DOORMAT NAVIGATION</h3>
                <ul>
                    <Link to="/" aria-label="On Click" className="footer-item">Home</Link>
                    <Link to="/about" aria-label="On Click" className="footer-item">About</Link>
                    <Link to="/menu" aria-label="On Click" className="footer-item">Menu</Link>
                    <Link to="/reservation" aria-label="On Click" className="footer-item">Reservation</Link>
                    <Link to="/order" aria-label="On Click" className="footer-item">Order Online</Link>
                    <Link to="/login" aria-label="On Click" className="footer-item">Login</Link>
                </ul>
            </div>
            <div className="footer-col">
                <h3 className="footer-col-title">CONTACT INFO</h3>
                <ul>
                    <li className='footer-item'>Address</li>
                    <li className='footer-item'>Phone number</li>
                    <li className='footer-item'>Email</li>
                </ul>
            </div>
            <div className="footer-col">
                <h3 className="footer-col-title">SOCIAL MEDIA LINKS</h3>
                <ul>
                    <li className='footer-item'>Facebook</li>
                    <li className='footer-item'>Instagram</li>
                    <li className='footer-item'>Twitter</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;