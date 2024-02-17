import React from 'react';
import './why.css';
import whyData from './data';
import LightCard from '../../components/LightCard/LightCard';

const Why = () => {
 

  return (
    <div className="container">
      <h1>Lab for Ethical AI and Data Science</h1>
      <div className="lab-info">
        {whyData.map((item, index) => (
          <LightCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Why;
