import React from 'react';
import './BirdCard.css';

const BirdCard = ({ bird, onClick }) => {
  return (
    <div className="bird-card" onClick={() => onClick(bird)}>
      <img src={bird.image} alt={`A ${bird.name} bird`} />
      <h2>{bird.name}</h2>
      <p>Species: {bird.species}</p>
    </div>
  );
};

export default BirdCard;
