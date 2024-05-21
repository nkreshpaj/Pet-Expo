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
        <p><span style={{fontWeight:'bold'}}>Description:</span>  {cat.description}</p>
        <p><span style={{fontWeight:'bold'}}>Temperament: </span> {cat.temperament}</p>
        <p><span style={{fontWeight:'bold'}}>Origin:</span>  {cat.origin}</p>
        <p><span style={{fontWeight:'bold'}}>Colors: </span> {cat.colors}</p>
      </div>
    </div>
  );
}

export default CatPopUp;
