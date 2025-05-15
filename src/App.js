import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import './App.css';
import Croprecommender from './components/Croprecommender';
import FertilizerRecommender from './components/FertilizerRecommender';
import HealthScanner from './components/HealthScanner';
import Signup from './components/Signup';
import ActivityLogger from './components/ActivityLogger';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <ActivityLogger/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/croprecommender" element={<Croprecommender />} />
            <Route path="/fertilizer" element={<FertilizerRecommender/>} />
            <Route path="/health" element={<HealthScanner/>} />
            <Route path="/signup" element={<Signup/>} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
