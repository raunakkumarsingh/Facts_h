// Contact.js

import React from 'react';
import './contact.css';
import Heading from '../../components/Heading/Heading'

const Contact = () => {
  return (
    <>
    {/* <Heading content="Contact"/> */}
    <div className="contact-container">
      <div className="contact-card">
        <h2>Center For FACTS H Lab</h2>
        <div className="contact-info">
          <p><strong>Contact:</strong> Dr. Ebin Deni Raj</p>
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
