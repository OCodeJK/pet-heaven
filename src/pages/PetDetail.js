import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css';


const PetDetail = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const location = useLocation();
    const navigate = useNavigate();
    const { infoData } = location.state || {}; //Get the detail when clicking the image that is passed here

    //handle the adoptButton
    const handleButtonClick = () => {
        if (loggedInUser) {
            //navigate to adoption page
            navigate('/adopt', {state: { infoData }})
        } else {
            //User is not logged in so prompt them to log in
            alert('Please log in to adopt this cutie.');
        }
    }

    return (
        <div className="pet-detail-container">
            <h1>Pet Detail</h1>
            {infoData ? (
                <div>
                    <img src={infoData.url} alt="petImage" className="pet-image"/>
                    <p><strong>Breed:</strong>{infoData.breeds[0].name}</p>
                    <p><strong>Weight:</strong>{infoData.breeds[0].weight.metric} metrics</p>
                    <p><strong>Origin:</strong>{infoData.breeds[0].origin}</p>
                    <p><strong>Temperament: </strong>{infoData.breeds[0].temperament}</p>
                    <button className='adoptButton' onClick={handleButtonClick}>Adopt Me !!!</button>
                </div>
                   
            ) : (
                <p>No detail was found.</p>
            )}
        </div>
      )
}

export default PetDetail