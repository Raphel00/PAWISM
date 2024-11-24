import React from 'react';
import PetCard from './PetCard';

const PetList = ({ searchTerm, filterType }) => {
  const pets = [
    { id: 1, name: 'Bella', breed: 'Labrador', type: 'Dog', imageUrl: 'https://i.pinimg.com/736x/f7/7c/6f/f77c6ff98bc4d59de0cbab7d2137ece3.jpg' },
    { id: 2, name: 'Luna', breed: 'Persian', type: 'Cat', imageUrl: 'https://2.bp.blogspot.com/-5qEcdVxgf7o/Vn82dfKqoFI/AAAAAAAAAEI/a59_UgOQKYI/s1600/c1b.jpg' },
    { id: 2, name: 'Princess', breed: 'RagDoll', type: 'Cat', imageUrl: 'https://th.bing.com/th/id/OIP.jNjPrfLnKhzmUvbBhKSH_AHaJY?rs=1&pid=ImgDetMain' },
    
  ];

  const filteredPets = pets.filter(pet => {
    return (
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType ? pet.type === filterType : true)
    );
  });

  return (
    <div className="pet-list">
      {filteredPets.map(pet => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;
