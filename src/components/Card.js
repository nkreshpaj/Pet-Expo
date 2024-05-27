import React from 'react';
import './Card.css';

const Card = ({ item, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(item)}>
      <img src={item.image} alt={` ${item.name}`} />
      <h2>{item.name}</h2>
      <p>Origin: {item.origin}</p>
    </div>
  );
};

export default Card;
