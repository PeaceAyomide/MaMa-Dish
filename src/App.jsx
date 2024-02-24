import React from 'react';
import Navbartop from './Components/Navbartop/Navbartop';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Dishes from './Pages/Dishes';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Navbartop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
