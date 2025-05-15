import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Features.css';

function Features() {
  const navigate = useNavigate();

  return (
    <div className="features-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Features</h1>
          <p>Discover how Smart Agro Advisory System can revolutionize your farming practices</p>
        </div>
      </div>
      
      <section className="feature-details">
        <div className="container">
          <div className="feature-item">
            <div className="feature-content">
              <h2>Crop Recommender</h2>
              <p>Our Crop Recommendation system analyzes soil nutrients, pH levels, and local climate data to suggest the most suitable crops for your land. By leveraging machine learning algorithms trained on extensive agricultural datasets, we provide recommendations that maximize yield potential while maintaining soil health.</p>
              <ul className="feature-points">
                <li>Soil-type specific recommendations</li>
                <li>Seasonal crop suggestions</li>
                <li>Historical performance analysis</li>
                <li>Region-optimized crop selection</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate('/croprecommender')}>Try Crop Recommender</button>
            </div>
            <div className="feature-image">
              <img src="/images/crops.jpg" alt="Crop Recommender" className="feature-img"/>
            </div>
          </div>
          
          <div className="feature-item reverse">
            <div className="feature-content">
              <h2>Fertilizer Recommender</h2>
              <p>Our Fertilizer Recommendation system helps you optimize nutrient application based on soil test results and crop requirements. This reduces waste, prevents over-fertilization, and ensures your plants receive exactly what they need to thrive.</p>
              <ul className="feature-points">
                <li>Customized NPK ratio recommendations</li>
                <li>Micronutrient deficiency detection</li>
                <li>Environmentally sustainable practices</li>
                <li>Cost-effective fertilizer planning</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate('/fertilizer')}>Try Fertilizer Recommender</button>
            </div>
            <div className="feature-image">
              <img src="/images/fertilizer.jpg" alt="Fertilizer Recommender" className="feature-img"/>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h2>Plant Disease Detector</h2>
              <p>Our Plant Disease Detection system uses advanced image processing and deep learning models to analyze leaf images and identify diseases early. This helps farmers take timely action to protect their crops and improve productivity.</p>
              <ul className="feature-points">
                <li>AI-powered disease identification</li>
                <li>Early-stage disease detection</li>
                <li>Detailed analysis and treatment suggestions</li>
                <li>Supports multiple plant species</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate('/health')}>Try Plant Disease Detector</button>
            </div>
            <div className="feature-image">
              <img src="/images/disease.jpg" alt="Plant Disease Detector" className="feature-img"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
