import React from 'react'
import New from '../../assets/images/new.gif'
import './latestnews.css'



function LatestNews({News}) {

  return (
    <div className="obj-component">
    <h3>Latest News</h3>
     <ul>
      {News.map((point, index) => (
        <li > <a href={point.link}>{point.news} </a> <img src={New} width="30px" height="30px" alt="New"/> </li> 
      ))}
    </ul>
 
  </div>
  )
}

export default LatestNews