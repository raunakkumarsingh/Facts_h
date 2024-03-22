// Footer.js
import React from 'react';
import './footer.css'; 
import logo from '../../assets/icons/logo1.png'
import iiitklogo from '../../assets/icons/IIITK_logo1.png'

const Footer = () => {
  return (
    <footer className="footer-container">
    
       <img src={logo} alt="Left Logo" className="logo-left my4" />
        
      
      <div className="footer-address">
        <p>Indian Institute of Information Technology Kottayam,</p>
<p>Valavoor.P.O, Pala, Kottayam,</p>
<p>Kerala, India-686635</p>
        <p>Phone: +91-0482-2202195</p>
        <hr/>
      
        <center>&copy; Copyright © 2024 All Rights Reserved.</center>
      </div>
      <img src={iiitklogo} alt="Right Logo" className="logo-right my-1" />
    </footer>
  );
};

export default Footer;
