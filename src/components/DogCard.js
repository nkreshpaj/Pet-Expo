import React from 'react';
import './DogCard.css';

const DogCard = ({ dog, onClick }) => {
  return (
    <div className="dog-card" onClick={() => onClick(dog)}>
      <img src={dog.image} alt={`A ${dog.name} dog`} />
      <h2>{dog.name}</h2>
      <p>Origin: {dog.origin}</p>
    </div>
  );
};

export default DogCard;
