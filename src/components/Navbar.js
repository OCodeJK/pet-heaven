import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import logo from "./pet-haven-logo.png";

const Navbar = () =>{
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

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
    navigate('/');
    closeMobileMenu();
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link to="/"><img src={logo} className="navbar-logo" alt="logo"></img></Link>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/cats" onClick={closeMobileMenu}>Available Pets</Link></li>
        {!isLoggedIn && <li><Link to="/register" onClick={closeMobileMenu}>Join Us</Link></li>}
        {!isLoggedIn && <li><Link to="/login" onClick={closeMobileMenu}>Login</Link></li>}
        {isLoggedIn &&<li> <Link to="/release" onClick={closeMobileMenu}>Rehoming</Link></li>}
        {isLoggedIn &&<li> <Link to="/" onClick={handleLogout}>Logout</Link></li>}
      </ul>  
    </nav>
  );
}

export default Navbar;