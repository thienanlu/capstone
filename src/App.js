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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;