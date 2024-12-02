// import components
import './css/header.css'
import Navbar from './Navbar';

// import image
import logo from './img/Logo.svg';

function Header(){
    return(
        <header id="header">
            <img src={logo} alt="Logo" className="header-logo"/>
            <Navbar />
        </header>
    )
}

export default Header;

