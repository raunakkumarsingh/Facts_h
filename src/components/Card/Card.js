import React, { useState } from 'react';
import './card.css'; // Import your CSS file
import ArrowIcon from '../../assets/icons/ArrowIcon.svg';
import ProfileData from './ProfileData';

const Card = () => {


  return (
    <div className="card-container">
      {ProfileData.map((profile, index) => (
        <div className="card" key={index}>
          <img src={require(`../../assets/profile/${profile.image}`)}  alt="Card Image" className="card-image rounded-circle" />
          <p className="card-description text-center ">{profile.name}</p>
          <p className="card-description text-center">{profile.position}</p>
        
          { 
            <ul className="more-info list-group list-unstyled">
              {profile.research.map((info, index) => (
                <li className='' key={index}>{info}</li>
              ))}
            </ul>
          }
        </div>
      ))}
    </div>
  );
};

export default Card;
