import React from 'react';
import './DogPopUp.css';

function DogPopUp({ dog, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="dog-image-container">
          <img src={dog.image} alt={`A ${dog.name} dog`} className="dog-image" />
        </div>
        <h2>{dog.name}</h2>
        <p><span style={{fontWeight:'bold'}}>Breed Group:</span> {dog.breed_group}</p>
        <p><span style={{fontWeight:'bold'}}>Size:</span> {dog.size}</p>
        <p><span style={{fontWeight:'bold'}}>Lifespan:</span> {dog.lifespan}</p>
        <p><span style={{fontWeight:'bold'}}>Colors:</span> {dog.colors}</p>
        <p><span style={{fontWeight:'bold'}}>Description:</span> {dog.description}</p>
        <p><span style={{fontWeight:'bold'}}>Temperament:</span> {dog.temperament}</p>
        <p><span style={{fontWeight:'bold'}}>Origin:</span> {dog.origin}</p>
      </div>
    </div>
  );
}

export default DogPopUp;
