import React from 'react';
import './style.css';

const ReleasePet = () => {

  const handleChange = (e) => {
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send pet information to the backend or email to the admin
  };

  return (
    <div className="release-container">
      <h2>Release Your Pet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} placeholder="Pet's Name" />
        <input type="text" name="breed" onChange={handleChange} placeholder="Breed" />
        <input type="number" name="age" onChange={handleChange} placeholder="Age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReleasePet;