import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Smart Agro <span className="highlight">Advisory System</span></h1>
            <p className="subtitle">A Machine Learning-based Web Application for Crop and Fertilizer Recommendation, along with Plant Disease Detection, helping farmers make data-driven decisions for better yield and resource optimization.</p>
            <div className="cta-buttons">
              <Link to="/croprecommender" className="btn-primary">Crop Recommender</Link>
              <Link to="/fertilizer" className="btn-primary">Fertilizer Recommender</Link>
              <Link to="/health" className="btn-primary">Plant Disease Detector</Link>
            </div>
          </div>
        </div>
      </div>
      
      <section className="features-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Crop Recommendation</h3>
              <p>Get AI-powered suggestions on which crops to plant based on soil characteristics and climate data.</p>
            </div>
            <div className="feature-card">
              <h3>Fertilizer Recommendation</h3>
              <p>Optimize your fertilizer usage with personalized recommendations tailored to your soil needs.</p>
            </div>
            <div className="feature-card">
              <h3>Plant Disease Detection</h3>
              <p>Identify plant diseases early using AI-powered image analysis and receive expert treatment suggestions to protect your crops.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-preview">
        <div className="container">
          <h2>Smart Farming with AI</h2>
          <p>Our machine learning algorithms analyze multiple parameters to provide you with the most accurate agricultural recommendations.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
