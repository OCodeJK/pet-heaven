import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt, faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import reviewer1 from './resources/alex_dog.jpg';
import reviewer2 from './resources/emily_cat.jpg';
import reviewer3 from './resources/sarah_dog.png';
import reviewer4 from './resources/bella_cat.jpeg';

const Home = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [featuredCat, setFeaturedCat] = useState("");
  const [featuredDog, setFeaturedDog] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem('users')) || {};
    if (loggedInUser) {
      setName(userInfo[0].username);
    } else {
      setName('Guest');
    }
    
    const fetchFeaturedPet = async () => {
      try {
        setLoading(true);

        //Fetch dog
        const dogResponse = await axios.get('https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_XjhCuLTedTIe03t2MeMEWQVZoF0qVfKV08iJR7B2grwqOEAdJauMV74eyvQtrZIe')
        setFeaturedDog(dogResponse.data);

        //Fetch cat
        const catResponse = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_3PEQWAzDglUMcq4YeeZ8ZYdZmmnqD2H9DqaMfmn8lPEEKkqeBbKR20Yfa4moUJRj')
        setFeaturedCat(catResponse.data);

        setLoading(false);

      } catch (error) {
        console.log("Error fetching pets:", error);
        setLoading(false);
      }
    };

    fetchFeaturedPet();
    // eslint-disable-next-line
  }, []);

  const herobuttonHandler = () => {
    navigate("/cats");
  }

  const handleImageClick = (infoData) => {
    //Navigate to the info page
    navigate('/detail', {state : {infoData}});
  }

  const handleFindOutMore = () => {
    navigate("/about");
  }

  const reviewsData = [
    {
      text: "Pet Haven helped me find the perfect furry companion. Thank you!",
      author: "Alex",
      img: reviewer1,
      rating: 5
    },
    {
      text: "Adopting through Pet Haven was a wonderful experience!",
      author: "Elise",
      img: reviewer2,
      rating: 4.5
    },
    {
      text: "I am so happy with my new dog. The process was smooth and easy.",
      author: "Sarah",
      img: reviewer3,
      rating: 4
    },
    {
      text:"I love my new furry friend thanks to Pet Haven",
      author: "Bella",
      img: reviewer4,
      rating: 4.5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out'); // Trigger fade-out before changing slide
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
        );
        setFadeClass('fade-in'); // Add fade-in after slide change
      }, 500); // Match fade-out animation duration
    }, 4000); // Change slides every 4 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  });

  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon 
          key={i} 
          icon={solidStar} 
          style={{ color: '#ffc107' }} 
          className="star-icon"/>
        );
      } else if (i - 0.5 === rating) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            style={{ color: '#ffc107'}}
            className="star-icon"
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon 
          key={i} 
          icon={emptyStar} 
          style={{ color: '#ddd' }} 
          className="star-icon"/>
        );
      }
    }
    return stars;
  };

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
          Pet Haven is dedicated to providing abandoned and neglected pets a chance to find new, loving homes. 
          We work tirelessly with shelters and communities to ensure these animals receive the care they deserve.
        </p>
        <button className="find-out-more-button" onClick={handleFindOutMore}>
          Find Out More
        </button>
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

      <section className="reviews">
        <h2>What Our Adopters Say</h2>
        <div className={`review-slider ${fadeClass}`}>
          <div className="review">
            <p>"{reviewsData[currentIndex].text}"</p>
            <h4>{reviewsData[currentIndex].author}</h4>
            <img src={reviewsData[currentIndex].img} className="review-image" alt="owner and pet"></img>
            <div className="stars">{renderStars(reviewsData[currentIndex].rating)}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home