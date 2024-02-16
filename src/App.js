import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, NavLink, Route, Switch } from ReactRouterDOM;
import Navbar from './components/Navbar/Navbar';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <ImageSlider  />;
      <Card/>
      <Footer/>
      
   </>
  );
};

export default App;
