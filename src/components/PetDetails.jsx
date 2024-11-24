import React from 'react';
import { useParams } from 'react-router-dom';

const PetDetail = () => {
  const { id } = useParams();
  const pet = {
    id: 1,
    name: 'Bella',
    breed: 'Labrador',
    type: 'Dog',
    description: 'A friendly Labrador who loves to play.',
    imageUrl: 'https://i.pinimg.com/736x/f7/7c/6f/f77c6ff98bc4d59de0cbab7d2137ece3.jpg',
  }; 
  
  return (
    <div>
      <h2>{pet.name}</h2>
      <img src={pet.imageUrl} alt={pet.name} />
      <p>{pet.breed}</p>
      <p>{pet.type}</p>
      <p>{pet.description}</p>
      <button 
      style={{
    backgroundColor: "#ff6f61", 
    color: "white",              
    padding: "10px 20px",        
    border: "none",              
    borderRadius: "5px",         
    cursor: "pointer",           
    fontSize: "16px",            
    transition: "background-color 0.3s ease", 
  }}>Adopt Me!</button>
    </div>
  );
};

export default PetDetail;
