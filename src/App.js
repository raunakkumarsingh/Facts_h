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
import Gallery from './Pages/Gallery/Gallery';
import { createBrowserHistory } from 'history';
import Intern from './Pages/Intern/Intern';
const browserHistory = createBrowserHistory();
const App = () => {

  return (
    <Router history={browserHistory}>
      <div className='app-container'>
      <Navbar />
      <div className='extra-margin'></div>
      </div>
      <Routes >
        <Route path="/" element={ <Home/> } /> 
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Vision" element={ <Vision/> } />
        <Route path="/whyfactsh" element={ <Why/> } /> 
        <Route path="/fundproject" element={ <FundProject/> } /> 
        <Route path="/intern" element={ <Intern/> } /> 
        <Route path="/publication" element={ <Publication/> } /> 
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/people" element={ <People/> } />
       
      </Routes>
      <Footer/>
      
   </Router>
  );
};

export default App;
