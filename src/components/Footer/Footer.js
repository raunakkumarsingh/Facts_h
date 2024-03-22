// Footer.js
import React from 'react';
import './footer.css'; 
import logo from '../../assets/icons/logo1.png'
import iiitklogo from '../../assets/icons/IIITK_logo1.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logos mx-2">
       <img src={logo} alt="Left Logo" className="logo-left my4" />
        <img src={iiitklogo} alt="Right Logo" className="logo-right my-1" />
      </div>
      <div className="footer-address">
        <p>Indian Institute of Information Technology Kottayam,</p>
<p>Valavoor.P.O, Pala, Kottayam,</p>
<p>Kerala, India-686635</p>
        <p>Phone: +91-0482-2202195</p>
      </div>
      {/* <div className="footer-icons">
        <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
       
      </div> */}
      
        <center>&copy; Copyright © 2024 All Rights Reserved.</center>
    </footer>
  );
};

export default Footer;
