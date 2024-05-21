import React from 'react';
import './BirdPopUp.css';

function BirdPopUp({ bird, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="bird-image-container">
          <img src={bird.image} alt={`A ${bird.name} bird`} className="bird-image" />
        </div>
        <h2>{bird.name}</h2>
        <p><span style={{fontWeight:'bold'}}>Species:</span>  {bird.species}</p>
        <p><span style={{fontWeight:'bold'}}>Family:</span>  {bird.family}</p>
        <p><span style={{fontWeight:'bold'}}>Habitat:</span>  {bird.habitat}</p>
        <p><span style={{fontWeight:'bold'}}>Place of Found:</span>  {bird.place_of_found}</p>
        <p><span style={{fontWeight:'bold'}}>Diet:</span>  {bird.diet}</p>
        <p><span style={{fontWeight:'bold'}}>Description:</span> {bird.description}</p>
        <p><span style={{fontWeight:'bold'}}>Weight/kg:</span>  {bird.weight_kg}</p>
        <p><span style={{fontWeight:'bold'}}>Height/cm:</span>  {bird.height_cm}</p>
      </div>
    </div>
  );
}

export default BirdPopUp;
