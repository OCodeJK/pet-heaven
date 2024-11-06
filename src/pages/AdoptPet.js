import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

const AdoptPet = () => {
  const location = useLocation();
  const {infoData} = location.state || {};
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (date) {
      alert("Interview has been scheduled, see you soon!");
    } else {
      setMessage("Please select a valid date.");
    }
  }

  return(
    <div className="adopt-container">
      <h1>Adoption Page</h1>
      {infoData ? (
                <div>
                    <img src={infoData.url} alt="petImage" className="pet-image"/>
                    <p><strong>Breed: </strong>{infoData.breeds[0].name}</p>
                    <p>Before we let you adopt this pet, we have to know you have the right ethics for it.
                    <p>Please let us know when you are available so we can interview you.</p>
                    </p>
                    <input type="date" placeholder="Select a date" min={new Date().toJSON().slice(0, 10)} onChange={handleDateChange} value={date}/>
                    {message && <p className="error-message">{message}</p>}
                    <br />
                    <button className="adoptButton" onClick={handleButtonClick}>Confirm</button>
                    
                </div>
                   
            ) : (
                <p>No detail was found.</p>
            )}
    </div>
  );
}

export default AdoptPet;