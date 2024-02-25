import React from 'react';
import './vision.css';
import introInfo from '../../Content/intoInfo'
import LightCard from '../../components/LightCard/LightCard';
import Heading from '../../components/Heading/Heading';


const Vision = (props) => {
 

  return (
    <div className="container">
      <Heading content="Vision"/>
      <div className="lab-info">
        {introInfo.map((item, index) => (
          <LightCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Vision;
