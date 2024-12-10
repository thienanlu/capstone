// import components
import Home from './assets/Home'
import About from './assets/About'
import Menu from './assets/Menu'
import Reservation from  './assets/Reservation'
import Order from './assets/Order'
import Login from './assets/Login'
import ConfirmedBooking from './assets/ConfirmedBooking'

// import react-router
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// import css
import './App.css'

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<ConfirmedBooking/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
