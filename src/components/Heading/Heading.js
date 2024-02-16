// Heading.js

import React from 'react';
import './Heading.css';

const Heading = ({ content }) => {
  return (
    <div className="heading-container">
      <h1 className="heading-content">{content}</h1>
    </div>
  );
};

export default Heading;
