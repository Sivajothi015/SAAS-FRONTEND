import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Camera, Image } from 'lucide-react';
import '../Pages/HealthScanner.css';
import ResultsDisplay from './ResultsDisplay';


const HealthScanner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef();

  // Handle gallery image selection
  const handleGallerySelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);  // Store the file
      setAnalysisResult(null);
      setShowResults(false);
    }
  };

  // Trigger the file input for camera
  const handleCameraAccess = () => {
    fileInputRef.current.click();
  };

  // Upload image and get prediction
  const analyzeImage = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', selectedImage);
    
    try {
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setAnalysisResult(response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Go back to scanner from results
  const handleBackToScanner = () => {
    setShowResults(false);
  };

  return (
    <div className="health-scanner-container">
      {!showResults ? (
        <div className="card">
          <h1 className="title">Disease Detector</h1>
          
          <div className="icon-container">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="selected-image"
              />
            ) : (
              <div className="icon-placeholder">
                <Camera size={80} color="#3b82f6" />
              </div>
            )}
          </div>
          
          <div className="options-container">
            <label className="option-button gallery-button">
              <Image className="button-icon" size={24} />
              <span>Gallery</span>
              <input
                type="file"
                accept="image/*"
                className="hidden-input"
                onChange={handleGallerySelect}
                ref={fileInputRef}
                capture="environment" // Enables real camera use on mobile
              />
            </label>
            
            <button
              onClick={handleCameraAccess}
              className="option-button camera-button"
            >
              <Camera className="button-icon" size={24} />
              <span>Camera</span>
            </button>
          </div>
          
          {selectedImage && (
            <button 
              onClick={analyzeImage} 
              className="analyze-button"
              disabled={isLoading}
            >
              {isLoading ? 'Analyzing...' : 'Analyze Image'}
            </button>
          )}
        </div>
      ) : (
        <ResultsDisplay 
          analysisResult={analysisResult} 
          onBack={handleBackToScanner}
          imageUrl={selectedImage ? URL.createObjectURL(selectedImage) : null}
        />
      )}
    </div>
  );
};

export default HealthScanner;