import React from 'react';
import '../Pages/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Smart Agro <span className="highlight">Advisory System</span></h2>
          <p>A Machine Learning based Web Application for Crop and Fertilizer Recommendation, along with Plant Disease Detection</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SAAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
