import React, { useState } from 'react';
import './card.css'; // Import your CSS file
import ArrowIcon from '../../assets/icons/ArrowIcon.svg';


const Card = (props) => {
   const {PhDScholars,MTech,UG}=props;
 console.log(props);
  return (
    <div className="card-container">
      {props.ProfileData.map((profile, index) => ( 
        <div className="card" key={index}>
        {props.type=="0"?<img src={require(`../../assets/profile/avatar.png`)}  alt="Card Image" className="card-image rounded-circle" />:<img src={require(`../../assets/profile/${profile.image}`)}  alt="Card Image" className="card-image rounded-circle" />}
          <h5 className="card-description text-center "><strong>{profile.name}</strong></h5>
          <h6 className="card-description text-center">{props.type=="1"?profile.designation:profile.position}</h6>
        
         { props.type=="0"?<div></div>: 
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
