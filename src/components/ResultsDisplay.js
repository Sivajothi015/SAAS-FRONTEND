import React from 'react';
import { ArrowLeft, AlertCircle, Check, Info } from 'lucide-react';


const ResultsDisplay = ({ analysisResult, onBack, imageUrl }) => {
  if (!analysisResult) return null;

  const getConfidenceColor = (confidence) => {
    const confidenceNum = parseFloat(confidence);
    if (confidenceNum >= 0.8) return 'text-red-600';
    if (confidenceNum >= 0.5) return 'text-orange-500';
    return 'text-green-600';
  };

  return (
    <div className="results-card">
      <div className="results-header">
        <button onClick={onBack} className="back-button">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h2 className="results-main-title">Analysis Results</h2>
      </div>

      <div className="results-image-container">
        {imageUrl && (
          <img src={imageUrl} alt="Analyzed" className="results-image" />
        )}
      </div>

      <div className="diagnosis-summary">
        <AlertCircle size={24} className="summary-icon" />
        <p className="summary-text">
          Potential diagnosis based on image analysis. Please consult with a healthcare professional.
        </p>
      </div>

      {/* First row - horizontal layout for first two predictions */}
      <div className="predictions-row">
        <div className="prediction-card">
          <div className="prediction-header">
            <h3 className="prediction-title">
              {analysisResult['prediction_1'].class_name}
            </h3>
            <span className={`prediction-confidence ${getConfidenceColor(analysisResult['prediction_1'].confidence)}`}>
              {(parseFloat(analysisResult['prediction_1'].confidence) * 100).toFixed(1)}%
            </span>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <Info size={16} className="detail-icon" />
              Description
            </h4>
            <p className="detail-text">{analysisResult['prediction_1'].description}</p>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <AlertCircle size={16} className="detail-icon" />
              Prevention
            </h4>
            <p className="detail-text">{analysisResult['prediction_1'].prevention}</p>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <Check size={16} className="detail-icon" />
              Treatment
            </h4>
            <p className="detail-text">{analysisResult['prediction_1'].treatment}</p>
          </div>
        </div>

        <div className="prediction-card">
          <div className="prediction-header">
            <h3 className="prediction-title">
              {analysisResult['prediction_2'].class_name}
            </h3>
            <span className={`prediction-confidence ${getConfidenceColor(analysisResult['prediction_2'].confidence)}`}>
              {(parseFloat(analysisResult['prediction_2'].confidence) * 100).toFixed(1)}%
            </span>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <Info size={16} className="detail-icon" />
              Description
            </h4>
            <p className="detail-text">{analysisResult['prediction_2'].description}</p>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <AlertCircle size={16} className="detail-icon" />
              Prevention
            </h4>
            <p className="detail-text">{analysisResult['prediction_2'].prevention}</p>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <Check size={16} className="detail-icon" />
              Treatment
            </h4>
            <p className="detail-text">{analysisResult['prediction_2'].treatment}</p>
          </div>
        </div>
      </div>

      {/* Second row - centered third prediction */}
      <div className="prediction-center">
        <div className="prediction-card">
          <div className="prediction-header">
            <h3 className="prediction-title">
              {analysisResult['prediction_3'].class_name}
            </h3>
            <span className={`prediction-confidence ${getConfidenceColor(analysisResult['prediction_3'].confidence)}`}>
              {(parseFloat(analysisResult['prediction_3'].confidence) * 100).toFixed(1)}%
            </span>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <Info size={16} className="detail-icon" />
              Description
            </h4>
            <p className="detail-text">{analysisResult['prediction_3'].description}</p>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <AlertCircle size={16} className="detail-icon" />
              Prevention
            </h4>
            <p className="detail-text">{analysisResult['prediction_3'].prevention}</p>
          </div>
          
          <div className="prediction-detail">
            <h4 className="detail-title">
              <Check size={16} className="detail-icon" />
              Treatment
            </h4>
            <p className="detail-text">{analysisResult['prediction_3'].treatment}</p>
          </div>
        </div>
      </div>

      <div className="disclaimer">
        <p>This analysis is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider.</p>
      </div>
    </div>
  );
};

export default ResultsDisplay;