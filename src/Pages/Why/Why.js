import React from 'react';
import './why.css';
import whyData from '../../Content/whyData';
import LightCard from '../../components/LightCard/LightCard';
import Heading from '../../components/Heading/Heading';

const Why = () => {
 

  return (
    <div className="container">
      <Heading content="Why FACTS-H Lab"/>
      <div className="lab-info">
        {whyData.map((item, index) => (
          <LightCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Why;
