import React, { useState } from 'react';

const ReleasePet = () => {
  const [petInfo, setPetInfo] = useState({ name: '', breed: '', age: '' });

  const handleChange = (e) => {
    setPetInfo({ ...petInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send pet information to the backend or email to the admin
  };

  return (
    <div>
      <h2>Release Your Pet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={petInfo.name} onChange={handleChange} placeholder="Pet's Name" />
        <input type="text" name="breed" value={petInfo.breed} onChange={handleChange} placeholder="Breed" />
        <input type="number" name="age" value={petInfo.age} onChange={handleChange} placeholder="Age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReleasePet;