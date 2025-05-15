import React from 'react';
import '../Pages/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About SAAS</h1>
          <p>Empowering farmers with data-driven agricultural insights</p>
        </div>
      </div>
      
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>At SAAS, we're dedicated to transforming traditional farming practices through the power of artificial intelligence and machine learning. Our mission is to make precision agriculture accessible to farmers of all scales, helping them increase productivity while promoting sustainable farming practices.</p>
            
            <h2>Our Technology</h2>
            <p>Our recommendations are powered by sophisticated machine learning algorithms that have been trained on extensive agricultural datasets from various regions. By analyzing soil composition, climate patterns, and crop characteristics, our system provides tailored recommendations that take into account the unique conditions of your farm.</p>
            
            <div className="tech-highlights">
              <div className="tech-item">
                <h3>Data-Driven</h3>
                <p>We use real-world agricultural data to train our models, ensuring reliability and relevance.</p>
              </div>
              <div className="tech-item">
                <h3>Continuously Learning</h3>
                <p>Our systems improve over time as they process more data and outcomes.</p>
              </div>
              
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;