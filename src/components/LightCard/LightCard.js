import React from 'react'

const LightCard = ({ title, description }) => {
    return (
      <div className="lab-component">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

export default LightCard;