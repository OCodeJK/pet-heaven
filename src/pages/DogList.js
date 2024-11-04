import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PetsList.css'

const DogList = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/cats');
    }

    return (
        <div className="pets-list">
          <button className="view-button" onClick={handleButtonClick}>View Cats</button>
          <h2>Available Dogs for Adoption</h2>
            <div className="dog-container">

            </div>
        
        </div>
      );
}

export default DogList