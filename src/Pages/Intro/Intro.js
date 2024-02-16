import React from 'react';
import './intro.css';
import introInfo from './data';

const LabComponent = ({ title, description }) => {
  return (
    <div className="lab-component">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Intro = () => {
 

  return (
    <div className="container">
      <h1>Introduction </h1>
      <div className="lab-info">
        {introInfo.map((item, index) => (
          <LabComponent key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
