import React, { useState } from "react";
import "./navbar.css";
import logo from '../../assets/icons/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar fixed-top">
      <span className="nav-logo"><img width="11%" height="11%" src={logo}/>Facts-H Lab</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">People</a>
        <a href="/service">Events</a>
        <a href="/contact">Contact</a>
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
