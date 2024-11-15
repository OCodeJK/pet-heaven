import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userEmailExist = existingUsers.some(user => user.email === formData.email);
    const userNameExist = existingUsers.some(user => user.username === formData.username);

    if (userEmailExist) {
      setMessage('User with this email already exists.');
    } else if (userNameExist){
      setMessage("User with this name already exists.");
    }
    else {
      // Save the user data to local storage
      const updatedUsers = [...existingUsers, formData];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('loggedInUser', JSON.stringify(updatedUsers));
      navigate('/'); 
      window.location.reload(); // Redirect to home page
    }
  };

  return (
    <div className="register-container">
      <h2>Join us today!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          autoComplete='off'
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          autoComplete='off'
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;