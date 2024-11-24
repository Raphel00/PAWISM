import React from 'react';

const Filter = ({ setFilterType }) => {
  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="filter">
      <select onChange={handleFilterChange}>
        <option value="">All Pets</option>
        <option value="Dog">Dogs</option>
        <option value="Cat">Cats</option>
        <option value="Parrots">Parrots</option>
        <option value="Pigeons">Pigeons</option>
        <option value="Tortoise">Tortoise</option>
        
      </select>
    </div>
  );
};

export default Filter;
