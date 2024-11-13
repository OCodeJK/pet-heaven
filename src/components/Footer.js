import React from 'react';
import './Footer.css';
import logo from "./pet-haven-logo.png";

const Footer = () => {
  return <footer>
        <div className="footer_container">
            <span className="footer_left">
                <img src={logo}></img>
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