// import components
import Navbar from './components/Navbar';

// import image
import logo from './assets/img/Logo.svg';

function Header(){
    return(
        <header id="header">
            <img src={logo} alt="Logo"/>
            <Navbar />
        </header>
    )
}

export default Header;