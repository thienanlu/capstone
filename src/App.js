// App.js
import React from 'react';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Order from './components/Order';
import Login from './components/Login';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <div className="main">
      <HashRouter>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/confirmation">Confirmation</Link></li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/capstone " element={<Home />} />
          <Route path="/capstone/about" element={<About />} />
          <Route path="/capstone/menu" element={<Menu />} />
          <Route path="/capstone/reservation" element={<Reservation />} />
          <Route path="/capstone/order" element={<Order />} />
          <Route path="/capstone/login" element={<Login />} />
          <Route path="/capstone/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;