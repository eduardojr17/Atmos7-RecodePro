import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Promo from './pages/Promo'
import Travel from './pages/Travel'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Hoteis from './pages/Hoteis'

export default function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/promo" element={<Promo/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/hoteis" element={<Hoteis/>} />
        </Routes>
      </Router>
    </>
  )
}
