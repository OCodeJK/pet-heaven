import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const ReleasePet = () => {
  const [releaseInfo, setReleaseInfo] = useState({
    animal: "",
    breed: "",
    date: "",
    image: ""
  });
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setReleaseInfo({...releaseInfo, [e.target.name]:e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReleaseInfo({...releaseInfo, image: URL.createObjectURL(file)});
    }
  }

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (releaseInfo.animal && releaseInfo.breed && releaseInfo.date) {
      // setIsModalOpen(true);
      setIsPreviewVisible(true); //Show preview on submit

    } else if(!releaseInfo.animal){
      setMessage("Please enter a valid animal");

    } else if(!releaseInfo.breed){
      setMessage("Please enter a breed type");

    } else if(!releaseInfo.date){
      setMessage("Please enter a valid date");
    }
  }

  const handleConfirmSubmission = () => {
    setIsModalOpen(true); //Open success modal
    setIsPreviewVisible(false); //Hide the preview
  }

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  }

  return (
    <div className="release-container">
      <h2>Rehome Your Pet</h2>
      
      {!isPreviewVisible && (
        <>
          {/* Steps section */}
          <div className="steps-section">
            <h3>How It Works</h3>
            <ol>
              <li>Fill in your pet's details below.</li>
              <li>Upload a photo of your pet (optional).</li>
              <li>Schedule a date for the interview.</li>
            </ol>
          </div>

          <br />
          <input required type="text" name="animal" onChange={handleChange} placeholder="What pet are you releasing?" value={releaseInfo.animal}/>
          <input required type="text" name="breed" onChange={handleChange} placeholder="Breed" value={releaseInfo.breed} />
          <input required type="date" name="date" onChange={handleChange} placeholder="Schedule an appointment" min={new Date().toJSON().slice(0, 10)} value={releaseInfo.date} 
          onKeyDown={(e) => {
            e.preventDefault();
          }}/>
          <input type="file" accept="image/*" onChange={handleImageUpload}/>
          <button onClick={handleButtonClick}>Submit</button>
          {message && <p className="error-message">{message}</p>}
        </>
      )}

      {/* Preview Section */}
      {isPreviewVisible && (
        <div className="pet-preview">
          <h3>Confirm your pet Details</h3>
          <br />
          <div className="preview-card">
          {releaseInfo.image && (
            <img
              src={releaseInfo.image}
              alt="Pet"
              className="pet-preview-image"
            />
          )}
          <div className="pet-details">
            <p><strong>Animal:</strong> {releaseInfo.animal}</p>
            <p><strong>Breed:</strong> {releaseInfo.breed}</p>
            <p><strong>Date:</strong> {releaseInfo.date}</p>
          </div>
          </div>
          <div className="preview-actions">
            <button onClick={() => {setIsPreviewVisible(false); setMessage("");}}>Edit Details</button>
            <button onClick={handleConfirmSubmission}>Confirm Submission</button>
          </div>
        </div>
      )}

      

      {/* Modal Box */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Success!</h2>
            <p>Interview has been scheduled. See you soon!</p>
            <button onClick={closeModal} className="modal-close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReleasePet;