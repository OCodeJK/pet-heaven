import React, { useState } from 'react'
import "./style.css";
import germanshepimg from "./resources/german_sherpard.jpg";
import tabbycatimg from "./resources/tabby_cat.jpg";

const About = () => {
  const [activeSection, setActiveSection] = useState("about-us");

  return (
    <div className="about-us-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveSection("about-us")} className={activeSection === "about-us" ? "active" : ""}>
            About Us
          </li>
          <li onClick={() => setActiveSection("mission-vision-impact")} className={activeSection === "mission-vision-impact" ? "active" : ""}>
            Mission, Vision & Impact
          </li>
          <li onClick={() => setActiveSection("team")} className={activeSection === "team" ? "active" : ""}>
            Meet Our Team
          </li>
          <li onClick={() => setActiveSection("get-involved")} className={activeSection === "get-involved" ? "active" : ""}>
            Get Involved
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* About Us Section */}
        <div className={`section ${activeSection === "about-us" ? "active-section" : ""}`}>
          <h1>About Us</h1>
          <p>
            Pet Heaven is a non-profit organization founded with the mission to rescue, rehabilitate, and rehome abandoned and
            neglected pets. We believe every pet deserves a chance at a happy and healthy life.
          </p>
        </div>

        {/* Mission, Vision, and Impact Section */}
        <div className={`section ${activeSection === "mission-vision-impact" ? "active-section" : ""}`}>
          <h2>Our Mission</h2>
          <p>
            To ensure every pet, regardless of age, breed, or circumstance, has the opportunity to live in a safe and loving home.
          </p>
          <h2>Our Vision</h2>
          <p>
            A world where no pet is left homeless, and every pet parent is equipped with the knowledge to provide the best care
            for their furry family members.
          </p>
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
        </div>

        {/* Meet Our Team Section */}
        <div className={`section ${activeSection === "team" ? "active-section" : ""}`}>
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
        </div>

        {/* Get Involved Section */}
        <div className={`section section-get-involved ${activeSection === "get-involved" ? "active-section" : ""}`}>
          <h2>Get Involved</h2>
          <p>Want to make a difference? Here's how you can help:</p>
          <ul>
            <li>Adopt a pet in need</li>
            <li>Volunteer at our shelters</li>
            <li>Donate to support our cause</li>
          </ul>
      </div>
      </div>
    </div>
  );
};

export default About