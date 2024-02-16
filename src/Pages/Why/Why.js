import React from 'react';
import './why.css';
import whyData from './data';

const LabComponent = ({ title, description }) => {
  return (
    <div className="lab-component">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Why = () => {
 

  return (
    <div className="container">
      <h1>Lab for Ethical AI and Data Science</h1>
      <div className="lab-info">
        {whyData.map((item, index) => (
          <LabComponent key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Why;
