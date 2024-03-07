import React from 'react';
import './imagecard.css'
const ImageCard = ({ image }) => {
    console.log(image);
  return (
    <div className="image-card">
      <img src={require(`../../assets/gallery/${image.src}`)} alt={image.alt} />
    </div>
  );
};

export default ImageCard;