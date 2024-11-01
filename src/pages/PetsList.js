import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PetsList.css';
import { useNavigate } from 'react-router-dom';


const PetsList = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCats = async () => {
      try {
        setLoading(true);
        axios.get('https://api.thecatapi.com/v1/images/search?limit=9&has_breeds=1&api_key=live_3PEQWAzDglUMcq4YeeZ8ZYdZmmnqD2H9DqaMfmn8lPEEKkqeBbKR20Yfa4moUJRj')
          .then(res => {
            setCats(res.data);
            console.log(res.data);
          }).catch(err => {
            console.log(err);
          })

      } catch (error) {
        console.error("Error fetching cat data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCats();
  }, []);

  const handleImageClick = (infoData) => {
    //Navigate to the info page
    navigate('/detail', {state : {infoData}});
  }

  return (
    <div className="pets-list">
      <h2>Available Cats for Adoption</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cat-container">
          {cats.map((cat, index) => (
            <div key={index} className="cat-card">
              <img src={cat.url} alt="catImage" className="cat-image" onClick={() => handleImageClick(cat)} style={{cursor: 'pointer'}} />
              <br></br>
              <p>Breed: {cat.breeds[0].name}</p>
              <p>Origin: {cat.breeds[0].origin}</p>
              <p>Temperament: {cat.breeds[0].temperament}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PetsList;