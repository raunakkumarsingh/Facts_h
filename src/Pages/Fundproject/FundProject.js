import React from 'react';
import './fundproject.css';
import Heading from '../../components/Heading/Heading';
import fundProjects from '../../Content/fundprojects';
const FundProject = () => {
  

  return (
    <div className='pro'>
      <Heading content="Funded Project"/>
      <table className="project-table">
        <thead>
          <tr>
            <th>Funding Agency</th>
            <th>Title</th>
            <th>Amount (INR)</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {fundProjects.map((project, index) => (
            <tr key={index}>
              <td>{project.fundingAgency}</td>
              <td>{project.title}</td>
              <td>{project.amount}</td>
              <td>{project.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FundProject;
