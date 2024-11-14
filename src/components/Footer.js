import React from 'react';
import './Footer.css';
import logo from "./pet-haven-logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser'); // Remove user data from local storage on logout
        navigate('/');
        window.location.reload();
    };

    return <footer>
            <div className="footer_container">
                <Link to="/">
                    <span className="footer_left">
                        <img src={logo} alt="logo"></img>
                    </span>
                </Link>

                <span className="footer_middle">
                    <span>    
                        <p style={{textDecoration: "underline"}}>Sitemap</p>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/cats">Available Pets</Link></p>
                        {loggedInUser && <p><Link to="/release">Rehoming</Link></p>}
                        {!loggedInUser && <p><Link to="/login">Login</Link></p>}
                        {loggedInUser && <p><Link to="/" onClick={handleLogout}>Logout</Link></p>}
                        <p><Link to="/about">About Us</Link></p>
                    </span>
                </span>

                <span className="footer_right">
                    <span>
                        <p>Bukit Timah 123 #11-092</p>
                        <p>Clementi Road 456 #10-239</p>
                        <p className="footer_email">Email: <a href="mailto:pethaven@outlook.com">pethaven@outlook.com</a></p>
                    </span>
                </span>
            </div>


            <p className="copyright">&copy; 2024 Pet Haven. All rights reserved.</p>
        </footer>
}

export default Footer;