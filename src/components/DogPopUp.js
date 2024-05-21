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
        <p>Breed Group: {dog.breed_group}</p>
        <p>Size: {dog.size}</p>
        <p>Lifespan: {dog.lifespan}</p>
        <p>Colors: {dog.colors}</p>
        <p>Description: {dog.description}</p>
        <p>Temperament: {dog.temperament}</p>
        <p>Origin: {dog.origin}</p>
      </div>
    </div>
  );
}

export default DogPopUp;
