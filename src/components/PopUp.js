import React from 'react';
import './PopUp.css';

function PopUp({ item, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="image-container">
          <img src={item.image} alt={`${item.name}`} className="image" />
        </div>
        <h2>{item.name}</h2>
        <p><span style={{fontWeight:'bold'}}>Description:</span>  {item.description}</p>
        <p><span style={{fontWeight:'bold'}}>Temperament: </span> {item.temperament}</p>
        <p><span style={{fontWeight:'bold'}}>Origin:</span>  {item.origin}</p>
        <p><span style={{fontWeight:'bold'}}>Colors: </span> {item.colors}</p>
      </div>
    </div>
  );
}

export default PopUp;
