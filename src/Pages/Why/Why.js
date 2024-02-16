import React from 'react';
import './why.css';

const LabComponent = ({ title, description }) => {
  return (
    <div className="lab-component">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Why = () => {
  const labInfo = [
    {
      title: "Addressing Ethical Gaps in AI Development",
      description: "In the current rapid pace of technological advancement, ethical considerations often lag behind. There is a pressing need for dedicated research and development facilities that can proactively address these gaps, ensuring AI technologies are developed with ethical principles at their core."
    },
    {
      title: "Navigating Privacy Challenges",
      description: "The digital era has brought unprecedented challenges in managing personal data privacy. The lab is needed to pioneer new ways to protect individual privacy in AI applications, balancing the benefits of big data with the rights of individuals."
    },
    // Add more items similarly
  ];

  return (
    <div className="container">
      <h1>Lab for Ethical AI and Data Science</h1>
      <div className="lab-info">
        {labInfo.map((item, index) => (
          <LabComponent key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Why;
