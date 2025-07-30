import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h2>TagMusic</h2>
          </div>
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="navbar-actions">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              The Future of Music
              <span className="accent-text"> Discovery</span>
            </h1>
            <p className="hero-description">
              Discover, organize, and share your music like never before. 
              Our AI-powered platform helps you find the perfect soundtrack for every moment.
            </p>
            <div className="hero-actions">
              <button className="btn-large btn-primary">Start Free Trial</button>
              <button className="btn-large btn-outline">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <div className="music-wave"></div>
              <div className="music-wave"></div>
              <div className="music-wave"></div>
              <div className="music-wave"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-header">
            <h2>Why Choose TagMusic?</h2>
            <p>Powerful features designed for music lovers and professionals</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">🎵</div>
              </div>
              <h3>Smart Discovery</h3>
              <p>Our AI algorithm learns your taste and suggests music you'll love</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">🏷️</div>
              </div>
              <h3>Intelligent Tagging</h3>
              <p>Automatically tag and organize your music collection with precision</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">📊</div>
              </div>
              <h3>Analytics Dashboard</h3>
              <p>Get insights into your listening habits and music trends</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">🤝</div>
              </div>
              <h3>Social Sharing</h3>
              <p>Share playlists and discover music through your network</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
