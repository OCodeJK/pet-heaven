import React, { useState } from 'react';
import './AdoptPet.css';

const AdoptPet = () => {
  const [adoptionInfo, setAdoptionInfo] = useState({ petId: '', memberName: '' });

  const handleChange = (e) => {
    setAdoptionInfo({ ...adoptionInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send adoption request to the backend or email to the admin
  };

  return (
    <div>
      <h2>Adopt a Pet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="petId" value={adoptionInfo.petId} onChange={handleChange} placeholder="Pet ID" />
        <input type="text" name="memberName" value={adoptionInfo.memberName} onChange={handleChange} placeholder="Your Name" />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default AdoptPet;