import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css';


const PetDetail = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const location = useLocation();
    const navigate = useNavigate();
    const { infoData } = location.state || {}; //Get the detail when clicking the image that is passed here
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    //handle the adoptButton
    const handleButtonClick = (e) => {
        e.preventDefault();
        
        if (loggedInUser && date) {
            //Open a modal box to display message
            setIsModalOpen(true);
            setMessage("");
        } else if (!loggedInUser) {
            setMessage("Please log in to adopt.");
        } else if (!date) {
            setMessage("Please select a date.");
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/');
    }

    return (
        <div className="pet-detail-container">
            <h1>Pet Detail</h1>
            {infoData ? (
                <div>
                    <img src={infoData.url} alt="petImage" className="pet-image"/>
                    <p><strong>Breed: </strong>{infoData.breeds[0].name}</p>
                    <p><strong>Weight: </strong>{infoData.breeds[0].weight.metric} metrics</p>
                    <p><strong>Origin: </strong>{infoData.breeds[0].origin}</p>
                    <p><strong>Temperament: </strong>{infoData.breeds[0].temperament}</p>
                    {!loggedInUser && <p>Log in to schedule an appointment so we can talk!</p>}
                    {loggedInUser && <input type="date" placeholder="DD/MM/YYYY" min={new Date().toJSON().slice(0, 10)} onChange={handleDateChange} value={date}/>}
                    {message && <p className="error-message">{message}</p>}
                    <button className='adoptButton' onClick={handleButtonClick}>Adopt Me !!!</button>
                </div>
                   
            ) : (
                <p>No detail was found.</p>
            )}
            {isModalOpen && (
             <div className="modal-overlay">
                <div className="modal-box">
                    <h2>Adoption Successful!</h2>
                    <p>Thank you for giving this pet a new home! See you soon! 🐾</p>
                    <button className="modal-close-button" onClick={closeModal}>Close</button>
                </div>
             </div>
            )}
        </div>
      )
}

export default PetDetail