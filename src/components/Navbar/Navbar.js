import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from '../../assets/icons/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar fixed-top">
      <Link to="/">
        <div className="nav-logo strong-text">
          <img src={logo} className="logo" alt="Logo" width="11%" height="11%" />
          FACTS-H LAB
        </div>
      </Link>
      <div className={`nav-items ${isOpen ? "open" : ""} d-flex `}>
        <Link to="/home"><strong>Home</strong></Link>
        {/* <Link to="/whyfactsh"><strong >WhyFACTS-H</strong></Link> */}
        <Link to="/vision"><strong>Vision</strong></Link>
        <Link to="/fundproject"><strong>Projects</strong></Link>
        <Link to="/publication"><strong>Publications</strong></Link>
        <Link to="/people"><strong>People</strong></Link>
        <Link to="/gallery"><strong>Gallery</strong></Link>
        <Link to="/contact"><strong>Contact</strong></Link>
      </div>
      <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
