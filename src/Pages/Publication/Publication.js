import React from 'react';
import './publication.css'
import Heading from '../../components/Heading/Heading';
import papers from '../../Content/papers';
import acceptedPapers from '../../Content/acceptedPapers';

const Publication = () => {
  const openWebsite = (url) => {
    window.open(url, '_blank').focus();
  };

  return (
    <>
    <div className='pub'>
      <Heading content="Publications"/>
      <table className="papers-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Conference/Journal</th>
            <th>Publisher</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((paper, index) => (
            <tr key={index} onClick={() => openWebsite(paper.website)}>
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
    <div className='pub'>
      <Heading content="Accepted Conference/Journal"/>
      <table className="papers-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Conference/Journal</th>
            {/* <th>Publisher</th> */}
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {acceptedPapers.map((paper, index) => (
            <tr key={index} onClick={() => openWebsite(paper.website)}>
              <td>{paper.title}</td>
              <td>{paper.authors.join(", ")}</td>
              <td>{paper.conference}</td>
              {/* <td>{paper.publisher}</td> */}
              <td>{paper.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Publication;
