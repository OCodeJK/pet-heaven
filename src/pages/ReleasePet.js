import React, { useState } from 'react';
import './style.css';

const ReleasePet = () => {
  const [releaseInfo, setReleaseInfo] = useState({
    animal: "",
    breed: "",
    date: ""
  });
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setReleaseInfo({...releaseInfo, [e.target.name]:e.target.value });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (releaseInfo.animal && releaseInfo.breed && releaseInfo.date) {
      setIsModalOpen(true);

    } else if(!releaseInfo.animal){
      setMessage("Please enter a valid animal");

    } else if(!releaseInfo.breed){
      setMessage("Please enter a breed type");

    } else {
      setMessage("Please enter a valid date");
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setReleaseInfo({ animal: "", breed: "", date: "" });
  }

  return (
    <div className="release-container">
      <h2>Rehome Your Pet</h2>
      <br />
      <input required type="text" name="animal" onChange={handleChange} placeholder="What pet are you releasing?" value={releaseInfo.animal}/>
      <input required type="text" name="breed" onChange={handleChange} placeholder="Breed" value={releaseInfo.breed} />
      <input required type="date" name="date" onChange={handleChange} placeholder="Schedule an appointment" min={new Date().toJSON().slice(0, 10)} value={releaseInfo.date}/>
      <button onClick={handleButtonClick}>Submit</button>
      {message && <p>{message}</p>}

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