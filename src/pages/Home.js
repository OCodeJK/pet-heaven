import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [name, setName] = useState('');
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const navigate = useNavigate();
  const [featuredCat, setFeaturedCat] = useState("");
  const [featuredDog, setFeaturedDog] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem('users')) || {};
    if (loggedInUser) {
      setName(userInfo[0].username);
    } else {
      setName('Guest');
    }
    // eslint-disable-next-line
    
    const fetchFeaturedCat = async () => {
      setLoading(true);
      await axios.get('https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_XjhCuLTedTIe03t2MeMEWQVZoF0qVfKV08iJR7B2grwqOEAdJauMV74eyvQtrZIe')
      .then(res => {
        setFeaturedDog(res.data);
        console.log(res.data);

      }).catch(err => {
        console.log("Error: " + err);
      })

      await axios.get('https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_3PEQWAzDglUMcq4YeeZ8ZYdZmmnqD2H9DqaMfmn8lPEEKkqeBbKR20Yfa4moUJRj')
      .then(res => {
        setFeaturedCat(res.data);
        setLoading(false);
        console.log(res.data);

      }).catch(err => {
        console.log("Error: " + err);
      })
    }
    fetchFeaturedCat();
  }, []);

  const herobuttonHandler = () => {
    navigate("/cats");
  }

  const handleImageClick = (infoData) => {
    //Navigate to the info page
    navigate('/detail', {state : {infoData}});
  }
  

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Pet Heaven, {name}</h1>
        <p>We connect abandoned pets with loving families.</p>
        <button className="hero-button" onClick={herobuttonHandler}>Find Your Pet Today</button>
      </section>

      {loading ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <section className="featured-pet">
          <h2>Meet Our Featured Pet!</h2>
          <div className="pet-container">
            {featuredCat.map((cat, index) => (
              <div key={index} className="pet-card">
                <img src={cat.url} alt="petImage" className="pet-image" onClick={() => handleImageClick(cat)} style={{cursor: 'pointer'}}/>
                <br></br>
                <p>Breed: {cat.breeds[0].name}</p>
                <p>Temperament: {cat.breeds[0].temperament}</p>
              </div>
            ))}
            {featuredDog.map((dog, index) =>(
              <div key={index} className="pet-card">
                <img src={dog.url} alt="petImage" className="pet-image" onClick={() => handleImageClick(dog)} style={{cursor: 'pointer'}}/>
                <br></br>
                <p>Breed: {dog.breeds[0].name}</p>
                <p>Temperament: {dog.breeds[0].temperament}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Pet Heaven is dedicated to providing abandoned and neglected pets a chance to find new, loving homes. 
          We work tirelessly with shelters and communities to ensure these animals receive the care they deserve.
        </p>
      </section>

      <section className="reviews">
        <h2>What Our Adopters Say</h2>
        <div className="reviews-slider">
          <div className="review">
            <p>"Pet Heaven helped us find the perfect furry companion. Thank you!"</p>
            <h4>- Alex and Bella</h4>
            <img src="" alt="Picture of owner and pet"></img>
          </div>
          <div className="review">
            <p>"Adopting through Pet Heaven was a wonderful experience!"</p>
            <h4>- Emily</h4>
            <img src="" alt="Picture of owner and pet"></img>
          </div>
          <div className="review">
            <p>"We are so happy with our new dog. The process was smooth and easy."</p>
            <h4>- Sarah</h4>
            <img src="" alt="Picture of owner and pet"></img>
          </div>
        </div>
      </section>

      <section className="video-section">
        <h2>Want to become a pet owner?</h2>
        <div className="video-container">
        <iframe width="943" height="530" 
        src="https://www.youtube.com/embed/R_0HgVBhwBM" 
        title="Pet Protector - Responsible Pet Ownership" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
        </div>
      </section>
    </div>
  );
};

export default Home