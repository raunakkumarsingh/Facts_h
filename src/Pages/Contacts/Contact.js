// Contact.js

import React from 'react';
import './contact.css';


const Contact = () => {
  return (
    <>
   
    <div className="responsivemap">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4486909409743!2d76.64747161049772!3d9.75521459029774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ce23bc170053%3A0x8757971e61eb21dd!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Kottayam!5e1!3m2!1sen!2sin!4v1709219395396!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" Loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="contact-container">
      <div className="contact-card">
        <h2>Center For FACTS H Lab</h2>
        <div className="contact-info">
          <p><strong>Phone:</strong> +91 (0) 482-2202195</p>
          <p><strong>Email:</strong> ebindeniraj@iiitkottayam.ac.in</p>
          <p>Indian Institute of Information Technology Kottayam,</p>
          <p>Valavoor.P.O, Pala, Kottayam,</p>
          <p>Kerala, India-686635</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
