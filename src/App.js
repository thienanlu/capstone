// import components
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Reservation from  './components/Reservation'
import Order from './components/Order'
import Login from './components/Login'
import ConfirmedBooking from './components/ConfirmedBooking'

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
