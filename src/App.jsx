import  ReactDom from 'react-dom/client'
import React, { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs/Index'
import Home from './pages/Home/Home'
import Products from './pages/Products/Index'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'





function App() {


  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={< Products/>} />
      
      {/* Add more routes as needed */}
      <Route path="*" element={<Home />} />

    </Routes>
    
  );
}

export default App;