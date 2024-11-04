import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      <h1 className="navbar-logo">Insert Logo Here</h1>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cats">Available Pets</Link></li>
        {!isLoggedIn && <li><Link to="/register">Join Us</Link></li>}
        {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
        {isLoggedIn &&<li> <Link to="/" onClick={handleLogout}>Logout</Link></li>}
        {isLoggedIn &&<li> <Link to="/release">Release Pet</Link></li>}
        {isLoggedIn && <li><Link to="/adopt">Adopt Pet</Link></li>}
      </ul>  
    </nav>
  );
}

export default Navbar;