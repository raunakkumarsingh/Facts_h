// Heading.js

import React from 'react';
import './Heading.css';

const Heading = ({ content }) => {
  return (
    <div className="heading-container">
      <h2 className="heading-content">{content}</h2>
    </div>
  );
};

export default Heading;
