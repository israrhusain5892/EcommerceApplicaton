import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './Components/Header'
import Home from './Pages/Home';


function App() {
  

  return (
    <>
    <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
     

    </>
  )
}

export default App
