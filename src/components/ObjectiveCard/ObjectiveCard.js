import React from 'react'
import './objectiveCard.css'

function ObjectiveCard({ title, description }) {
  return (
    <div className="obj-component">
    <h3>{title}</h3>
    <ul>
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
  )
}

export default ObjectiveCard