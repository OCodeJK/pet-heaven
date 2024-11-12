import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const navigate = useNavigate();

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem('users')) || {};
    if (loggedInUser) {
      setName(userInfo[0].username);
    } else {
      setName('Guest');
    }
    // eslint-disable-next-line
  }, []);

  const herobuttonHandler = () => {
    navigate("/cats");
  }

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Pet Heaven, {name}</h1>
        <p>We connect abandoned pets with loving families.</p>
        <button className="hero-button" onClick={herobuttonHandler}>Find Your Pet Today</button>
      </section>

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
          </div>
          <div className="review">
            <p>"Adopting through Pet Heaven was a wonderful experience!"</p>
            <h4>- Emily</h4>
          </div>
          <div className="review">
            <p>"We are so happy with our new dog. The process was smooth and easy."</p>
            <h4>- Sarah</h4>
          </div>
        </div>
      </section>

      <section className="video-section">
        <h2>Want to become a pet owner?</h2>
        <div className="video-container">
        <iframe width="943" height="530" 
        src="https://www.youtube.com/embed/R_0HgVBhwBM" 
        title="Pet Protector - Responsible Pet Ownership" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </div>
      </section>
    </div>
  );
};

export default Home