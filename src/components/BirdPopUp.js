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
        <p>Species: {bird.species}</p>
        <p>Family: {bird.family}</p>
        <p>Habitat: {bird.habitat}</p>
        <p>Place of Found: {bird.place_of_found}</p>
        <p>Diet: {bird.diet}</p>
        <p>Description: {bird.description}</p>
        <p>Weight/kg: {bird.weight_kg}</p>
        <p>Height/cm: {bird.height_cm}</p>
      </div>
    </div>
  );
}

export default BirdPopUp;
