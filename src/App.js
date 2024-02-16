import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer';
import {createBrowserRouter, RouterProvider, Route,Routes, Link, BrowserRouter as Router} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contacts/Contact'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Contact" element={ <Contact/> } />
       
      </Routes>
      <Footer/>
      
   </Router>
  );
};

export default App;
