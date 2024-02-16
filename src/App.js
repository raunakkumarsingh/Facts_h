import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer';
import {createBrowserRouter, RouterProvider, Route,Routes, Link, BrowserRouter as Router} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contacts/Contact'
import Why from './Pages/Why/Why'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/whyfactsh" element={ <Why/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/people" element={ <Card/> } />
       
      </Routes>
      <Footer/>
      
   </Router>
  );
};

export default App;
