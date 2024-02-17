import React from 'react';
import './intro.css';
import introInfo from './data';
import LightCard from '../../components/LightCard/LightCard';


const Intro = () => {
 

  return (
    <div className="container">
      <h1>Introduction </h1>
      <div className="lab-info">
        {introInfo.map((item, index) => (
          <LightCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
