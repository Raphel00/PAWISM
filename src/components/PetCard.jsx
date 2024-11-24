import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.imageUrl} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.breed}</p>
      <p>{pet.type}</p>
      <Link to={`/pet/${pet.id}`}>View Details</Link>
    </div>
  );
};

export default PetCard;
