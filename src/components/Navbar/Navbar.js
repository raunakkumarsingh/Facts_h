import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from '../../assets/icons/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar fixed-top">
      <Link to="/">
        <div className="nav-logo strong-text">
          <img  src={logo} className="logo rounded-circle" alt="Logo"  />
          FACTS-H LAB
        </div>
      </Link>
      <div className={`nav-items ${isOpen ? "open" : ""} d-flex `}>
        <Link onClick={() => setIsOpen(!isOpen)}  to="/home"><strong>Home</strong></Link>
        {/* <Link to="/whyfactsh"><strong >WhyFACTS-H</strong></Link> */}
        <Link onClick={() => setIsOpen(!isOpen)} to="/vision"><strong>Vision</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/fundproject"><strong>Projects</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/intern"><strong>Internship</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/publication"><strong>Publications</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/people"><strong>People</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/gallery"><strong>Gallery</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/contact"><strong>Contact</strong></Link>
      </div>
      <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
