import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by looking for loggedInUser in local storage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Remove user data from local storage on logout
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/pets">Available Pets</Link>
      {!isLoggedIn ? <Link to="/register">Join Us</Link> : ""}
      {!isLoggedIn ? <Link to="/login">Login</Link> : ""}
      {isLoggedIn ? <Link to="/" onClick={handleLogout}>Logout</Link> : ""}
      <Link to="/release">Release Pet</Link>
      <Link to="/adopt">Adopt Pet</Link>
    </nav>
  );
}

export default Navbar;