import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {createBrowserRouter, RouterProvider, Route,Routes, Link, BrowserRouter as Router} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contacts/Contact'
import Why from './Pages/Why/Why'
import Vision from './Pages/Vision/Vision';
import People from './Pages/People/People';
import Publication from './Pages/Publication/Publication'
import FundProject from './Pages/Fundproject/FundProject';
const App = () => {
  return (
    <Router>
      <div className='app-container'>
      <Navbar />
      <div className='extra-margin'></div>
      </div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Vision" element={ <Vision/> } />
        <Route path="/whyfactsh" element={ <Why/> } /> 
        <Route path="/fundproject" element={ <FundProject/> } /> 
        <Route path="/publication" element={ <Publication/> } /> 
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/people" element={ <People/> } />
       
      </Routes>
      <Footer/>
      
   </Router>
  );
};

export default App;
//ffgfhyj
