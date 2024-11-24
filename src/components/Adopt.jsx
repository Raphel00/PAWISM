import React, { useState, useEffect } from "react";
import PetCard from "../components/PetCard"; 
import { petsData } from "../data/petsData"; 

const Adopt = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPets(petsData); 
      setLoading(false);
    }, 1000); 
  }, []);

  if (loading) {
    return <div>Loading pets...</div>;
  }

  return (
    <div className="adopt-page">
      <h2>Available Pets for Adoption</h2>
      <div className="pet-list">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Adopt;
