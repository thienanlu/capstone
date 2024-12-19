import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/capstone" aria-label="On Click" className="nav-item">Home</Link>
            <Link to="/capstone/about" aria-label="On Click" className="nav-item">About</Link>
            <Link to="/capstone/menu" aria-label="On Click" className="nav-item">Menu</Link>
            <Link to="/capstone/reservation" aria-label="On Click" className="nav-item">Reservation</Link>
            <Link to="/capstone/order" aria-label="On Click" className="nav-item">Order Online</Link>
            <Link to="/capstone/login" aria-label="On Click" className="nav-item">Login</Link>
        </nav>
    )
}

export default Navbar;