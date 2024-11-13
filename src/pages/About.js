import React from 'react'
import "./style.css";
import germanshepimg from "./resources/german_sherpard.jpg";
import tabbycatimg from "./resources/tabby_cat.jpg";

const About = () => {
  return (
    <div className="about-us-details">
      <div className="about-us-page-container">
        <h1>About Us</h1>
        <p>
          Pet Heaven is a non-profit organization founded with the mission to rescue, rehabilitate, and rehome abandoned and 
          neglected pets. We believe every pet deserves a chance at a happy and healthy life.
        </p>
      </div>
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          To ensure every pet, regardless of age, breed, or circumstance, has the opportunity to live in a safe and loving home.
        </p>

        <h2>Our Vision</h2>
        <p>
          A world where no pet is left homeless, and every pet parent is equipped with the knowledge to provide the best care 
          for their furry family members.
        </p>
      </section>

      <section className="our-impact">
        <h2>Our Impact</h2>
        <div className="stats">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Pets Rescued</p>
          </div>
          <div className="stat">
            <h3>8,000+</h3>
            <p>Pets Adopted</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Volunteers</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="https://via.placeholder.com/100" alt="Founder" />
            <h4>Jane Doe</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/100" alt="Volunteer Manager" />
            <h4>John Smith</h4>
            <p>Volunteer Manager</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/100" alt="Veterinarian" />
            <h4>Emily White</h4>
            <p>Head Veterinarian</p>
          </div>
        </div>
      </section>

      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="stories">
          <div className="story">
            <img src={germanshepimg} alt="Dog Story" />
            <p>
              "Bella, a shy German Shepherd, found her forever home with the Johnson family. Today, she's thriving and happier than ever!"
            </p>
          </div>
          <div className="story">
            <img src={tabbycatimg} alt="Cat Story" />
            <p>
              "Max, a playful tabby cat, now enjoys cuddles and playtime with his new owner, Sarah."
            </p>
          </div>
        </div>
      </section>

      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>Want to make a difference? Here's how you can help:</p>
        <ul>
          <li>Adopt a pet in need</li>
          <li>Volunteer at our shelters</li>
          <li>Donate to support our cause</li>
        </ul>
        <button className="donate-button">Donate Now</button>
      </section>
    </div>
  );
};

export default About