import {Routes, Route, Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/reservation" className="nav-item">Reservation</Link>
            <Link to="/order" className="nav-item">Order Online</Link>
            <Link to="/login" className="nav-item">Login</Link>
        </nav>
    )
}

export default Navbar;