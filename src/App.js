import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import About from './pages/About/About'
import Course from './pages/Courses/Course';
import Contact from './pages/ContactUs/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Course/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
