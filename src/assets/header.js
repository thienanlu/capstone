// import components
import './css/header.css'
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

// import image
import logo from './img/Logo.svg';

function Header(){
    return(
        <header id="header">
            <Link to='/' aria-label='On Click'><img src={logo} alt="Logo" className="header-logo"/></Link>
            <Navbar />
        </header>
    )
}

export default Header;

