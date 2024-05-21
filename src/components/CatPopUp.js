import React from 'react';
import './CatPopUp.css';

function CatPopUp({ cat, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="cat-image-container">
          <img src={cat.image} alt={`A ${cat.name} cat`} className="cat-image" />
        </div>
        <h2>{cat.name}</h2>
        <p>Description: {cat.description}</p>
        <p>Temperament: {cat.temperament}</p>
        <p>Origin: {cat.origin}</p>
        <p>Colors: {cat.colors}</p>
      </div>
    </div>
  );
}

export default CatPopUp;
