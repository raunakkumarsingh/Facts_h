import React from 'react';
import './publication.css'
import Heading from '../../components/Heading/Heading';
import papers from '../../Content/papers';



const Publication = () => {
  return (
      <div className='pub'>

        <Heading  content="Publication"/>
        <table className="papers-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Conference</th>
          <th>Publisher</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {papers.map((paper, index) => (
          <tr key={index} onclick="window.location.href='google.com'">
            <td>{paper.title}</td>
            <td>{paper.authors.join(", ")}</td>
            <td>{paper.conference}</td>
            <td>{paper.publisher}</td>
            <td>{paper.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Publication;

