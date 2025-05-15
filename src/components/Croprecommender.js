import { useState } from "react";
import '../Pages/Croprecommender.css';

export default function CropRecommender() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
    nitrogen: "",
    phosphorus: "",
    potassium: ""
  });
  const [recommendedCrop, setRecommendedCrop] = useState("");

  const API_KEY = "26cd3c9154f754356ef4852e05fe6360"; 

  // 🔍 Fetch weather when user presses Enter
  const handleLocationEnter = async (e) => {
    if (e.key === "Enter") {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
        const data = await res.json();

        if (data.cod === 200) {
          const weather = {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            weather_desc: data.weather[0].description,
            wind_speed: data.wind.speed
          };
          setWeatherData(weather);

          // Prefill temperature and humidity into the form
          setFormData(prev => ({
            ...prev,
            temperature: weather.temperature.toString(),
            humidity: weather.humidity.toString()
          }));
        } else {
          alert("❌ Location not found");
        }
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      }
    }
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/predictcrop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          n: parseFloat(formData.nitrogen),
          p: parseFloat(formData.phosphorus),
          k: parseFloat(formData.potassium),
          temperature: parseFloat(formData.temperature),
          humidity: parseFloat(formData.humidity),
          ph: parseFloat(formData.ph),
          rainfall: parseFloat(formData.rainfall)
        })
      });

      const data = await response.json();
      setRecommendedCrop(data.prediction || "No prediction received");
    } catch (error) {
      console.error("Error fetching crop prediction:", error);
      setRecommendedCrop("Error fetching prediction");
    }
  };

  return ( 
    <div className="crop-recommender">
     
      <div className="container">
        <h1>Get real-time weather data and recommend crops based on soil information!</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter Location and press Enter"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleLocationEnter}
          />
        </div>
      </div>

      {/* Weather Info */}
      {weatherData && (
        <div className="card">
          <div className="card-header">🌦️ Weather Information</div>
          <div className="card-content">
            <div><span>🌡️ Temperature: {weatherData.temperature} °C</span></div>
            <div><span>💧 Humidity: {weatherData.humidity} %</span></div>
            <div><span>☁️ Weather: {weatherData.weather_desc}</span></div>
            <div><span>🌬️ Wind Speed: {weatherData.wind_speed} km/h</span></div>
          </div>
        </div>
      )}

      {/* Form for Manual Soil Input */}
      <div className="form-card">
        <h2>🧪 Enter Soil & Weather Data</h2>
        {[
          { label: "🌡️ Temperature (°C)", name: "temperature" },
          { label: "💧 Humidity (%)", name: "humidity" },
          { label: "🔬 pH Value", name: "ph", step: "0.1" },
          { label: "🌧️ Rainfall (mm)", name: "rainfall" },
          { label: "🧪 Nitrogen (N)", name: "nitrogen" },
          { label: "🧪 Phosphorus (P)", name: "phosphorus" },
          { label: "🧪 Potassium (K)", name: "potassium" }
        ].map(({ label, name, step }) => (
          <div className="form-group" key={name}>
            <label>{label}:</label>
            <input
              type="number"
              name={name}
              step={step || "1"}
              value={formData[name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button className="recommend-btn" onClick={handleSubmit}>
          Get Recommended Crop
        </button>

        {/* Final Prediction */}
        {recommendedCrop && (
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <h3>🌾 Recommended Crop: <span style={{ color: "#28a745" }}>{recommendedCrop}</span></h3>
          </div>
        )}
      </div>
    </div>
  );
}
