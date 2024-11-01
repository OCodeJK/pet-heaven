import React, { useState, useEffect } from 'react';
import './PetsList.css';

const PetsList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch list of pets from an API or backend
    // Example: setPets(responseData);
  }, []);

  return (
    <div>
      <h2>Available Pets for Adoption</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>{pet.name} - {pet.breed}</li>
        ))}
      </ul>
    </div>
  );
}

export default PetsList;