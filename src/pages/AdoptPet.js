import React from 'react';
import { useLocation } from 'react-router-dom';
import './AdoptPet.css';

const AdoptPet = () => {
  const location = useLocation();
  const {infoData} = location.state || {};

  return(
    <div className="adopt-container">
      <h1>Adoption Page</h1>
      {infoData ? (
                <div>
                    <img src={infoData.url} alt="catImage" className="cat-image"/>
                    <p><strong>Breed: </strong>{infoData.breeds[0].name}</p>
                    <p>Before we let you adopt this pet, we have to know you have the right ethics for it.
                    Please let us know when you are available so we can interview you
                    </p>
                    <input type="date" placeholder='Select a date'/><br></br>
                    <button>Confirm</button>
                </div>
                   
            ) : (
                <p>No detail was found.</p>
            )}
    </div>
  );
}

export default AdoptPet;