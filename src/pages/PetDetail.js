import React from 'react'
import { useLocation } from 'react-router-dom'
import './PetDetail.css';


const PetDetail = () => {
    const location = useLocation();
    const { infoData } = location.state || {}; //Get the detail when clicking the image that is passed here

    return (
        <div className="pet-detail-container">
            <h1>Pet Detail</h1>
            {infoData ? (
                <div>
                    <img src={infoData.url} alt="catImage" className="cat-image"/>
                    <p><strong>Breed:</strong>{infoData.breeds[0].name}</p>
                    <p><strong>Weight:</strong>{infoData.breeds[0].weight.metric} metrics</p>
                    <p><strong>Origin:</strong>{infoData.breeds[0].origin}</p>
                    <p><strong>Temperament: </strong>{infoData.breeds[0].temperament}</p>
                    <button className='adoptButton'>Adopt Me !!!</button>
                </div>
                   
            ) : (
                <p>No detail was found.</p>
            )}
        </div>
      )
}

export default PetDetail