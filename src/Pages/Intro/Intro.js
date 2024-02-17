import React from 'react';
import './intro.css';
import introInfo from './data';
import LightCard from '../../components/LightCard/LightCard';
import Heading from '../../components/Heading/Heading';


const Intro = () => {
 

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

export default Intro;
