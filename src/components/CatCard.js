import React from 'react';
import './CatCard.css';

const CatCard = ({ cat, onClick }) => {
  return (
    <div className="cat-card" onClick={() => onClick(cat)}>
      <img src={cat.image} alt={`A ${cat.name} cat`} />
      <h2>{cat.name}</h2>
      <p>Origin: {cat.origin}</p>
    </div>
  );
};

export default CatCard;
