import React, { useState } from 'react';
import '../Pages/FertilizerRecommender.css';
import axios from 'axios';


const FertilizerRecommender = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    moisture: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    soilType: '',
    cropType: '',
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert categorical inputs to numerical values as per model encoding
    const soilMap = {
      clay: 1,
      loamy: 2,
      sandy: 4,
      Red: 3,
      Black: 0
    };

    const cropMap = {
      maize: 3,
      wheat: 10,
      Barley: 0,
      cotton: 1,
      groundnuts: 2,
      millets: 4,
      oilseeds: 5,
      paddy: 6,
      pulses: 7,
      sugarcane: 8,
      tobacco: 9
    };

    try {
      const response = await axios.post(
        'http://localhost:8000/predictfertilizer',
        new URLSearchParams({
          temp: formData.temperature,
          humid: formData.humidity,
          mois: formData.moisture,
          soil: soilMap[formData.soilType],
          crop: cropMap[formData.cropType],
          nitro: formData.nitrogen,
          phos: formData.phosphorus,
          pota: formData.potassium
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error predicting fertilizer:', error);
      setPrediction('Error fetching prediction.');
    }
  };

  return (
    <div className="fertilizer-recommender-container">
      <h1>Fertilizer Recommender</h1>
      <div className="fertilizer-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="temperature">Temperature (°C):</label>
            <input type="number" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="humidity">Humidity (%):</label>
            <input type="number" id="humidity" name="humidity" value={formData.humidity} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="moisture">Soil Moisture (%):</label>
            <input type="number" id="moisture" name="moisture" value={formData.moisture} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="nitrogen">Nitrogen (N):</label>
            <input type="number" id="nitrogen" name="nitrogen" value={formData.nitrogen} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phosphorus">Phosphorus (P):</label>
            <input type="number" id="phosphorus" name="phosphorus" value={formData.phosphorus} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="potassium">Potassium (K):</label>
            <input type="number" id="potassium" name="potassium" value={formData.potassium} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="soilType">Soil Type:</label>
            <select id="soilType" name="soilType" value={formData.soilType} onChange={handleChange} required>
              <option value="" disabled>Select soil type</option>
              <option value="clay">Clay</option>
              <option value="loamy">Loamy</option>
              <option value="sandy">Sandy</option>
              <option value="Red">Red</option>
              <option value="Black">Black</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cropType">Crop Type:</label>
            <select id="cropType" name="cropType" value={formData.cropType} onChange={handleChange} required>
              <option value="" disabled>Select crop type</option>
              <option value="maize">Maize</option>
              <option value="wheat">Wheat</option>
              <option value="Barley">Barley</option>
              <option value="cotton">Cotton</option>
              <option value="groundnuts">Groundnuts</option>
              <option value="millets">Millets</option>
              <option value="oilseeds">Oilseeds</option>
              <option value="paddy">Paddy</option>
              <option value="pulses">Pulses</option>
              <option value="sugarcane">Sugarcane</option>
              <option value="tobacco">Tobacco</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Get Fertilizer Recommendation
          </button>
        </form>
      </div>

      {prediction && (
  <div className="recommendation-container">
    <h2>Recommended Fertilizer</h2>
    <div className="recommendation-details">
      <p><strong>Fertilizer Name:</strong> {prediction}</p>
    </div>
  </div>
)}
    </div>
  );
};

export default FertilizerRecommender;
