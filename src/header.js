// import components
import './assets/css/header.css'
import Navbar from './components/Navbar';

// import image
import logo from './assets/img/Logo.svg';

function Header(){
    return(
        <header id="header">
            <img src={logo} alt="Logo" className="header-logo"/>
            <Navbar />
        </header>
    )
}

export default Header;