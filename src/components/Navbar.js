import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/" aria-label="On Click" className="nav-item">Home</Link>
            <Link to="/about" aria-label="On Click" className="nav-item">About</Link>
            <Link to="/menu" aria-label="On Click" className="nav-item">Menu</Link>
            <Link to="/reservation" aria-label="On Click" className="nav-item">Reservation</Link>
            <Link to="/order" aria-label="On Click" className="nav-item">Order Online</Link>
            <Link to="/login" aria-label="On Click" className="nav-item">Login</Link>
        </nav>
    )
}

export default Navbar;