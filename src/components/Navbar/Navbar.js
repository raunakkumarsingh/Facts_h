import React, { useState } from "react";
import "./navbar.css";
import logo from '../../assets/icons/logo.png'
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar fixed-top ">
    <Link className="strong-text" to="/"> <div className="nav-logo "><img width="11%" height="11%" src={logo}/>FACTS-H LAB</div></Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home"><strong>Home</strong></a>
        <a href="/whyfactsh"><strong>Why FACTS-H</strong></a>
        <a href="/intro"><strong>Vision</strong></a>
        <a href="/people"><strong>People</strong></a>
        <a href="/contact"><strong>Contact</strong></a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
