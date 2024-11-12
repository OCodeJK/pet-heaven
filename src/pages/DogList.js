import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './PetsList.css'

const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        // Simulating delay using setTimeout for testing the loading 2sec delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        axios.get('https://api.thedogapi.com/v1/images/search?limit=9&has_breeds=1&api_key=live_XjhCuLTedTIe03t2MeMEWQVZoF0qVfKV08iJR7B2grwqOEAdJauMV74eyvQtrZIe')
          .then(res => {
            setDogs(res.data);
            console.log(res.data);
          }).catch(err => {
            console.log(err);
          })
      } catch (error) {
        console.error("Error fetching dog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDogs();
  }, []);

  const handleImageClick = (infoData) => {
    //Navigate to the info page
    navigate('/detail', {state : {infoData}});
  }

  const handleButtonClick = () => {
    navigate('/cats');
  }

  return (
    <div className="pets-list">
      <button className="view-button" onClick={handleButtonClick}>View Cats</button>
      <h2>Available Dogs for Adoption</h2>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="pet-container">
          {dogs.map((dog, index) => (
            <div key={index} className="pet-card">
              <img src={dog.url} alt="dogImage" className="pet-image" onClick={() => handleImageClick(dog)} style={{cursor: 'pointer'}} />
              <br></br>
              <p>Breed: {dog.breeds[0].name}</p>
              <p>Origin: {dog.breeds[0].origin}</p>
              <p>Temperament: {dog.breeds[0].temperament}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DogList