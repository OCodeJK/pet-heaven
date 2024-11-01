import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PetsList.css';


const PetsList = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      setLoading(true);
      try {
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

  return (
    <div className="pets-list">
      <h2>Available Cats for Adoption</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cat-scroll-container">
          {cats.map((cat, index) => (
            <div key={index} className="cat-card">
              <img src={cat.url} alt="catImage" className="cat-image" />
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