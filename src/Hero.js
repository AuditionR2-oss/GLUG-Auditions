import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop" 
          alt="Hero Background" 
        />
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">NOW STREAMING</div>
        <h1 className="hero-title">Pushpa 2: The Rule</h1>
        <div className="hero-meta">
          <span className="match">98% Match</span>
          <span className="year">2024</span>
          <span className="rating">A</span>
          <span className="duration">3h 21m</span>
        </div>
        <p className="hero-description">
          The rule continues. Pushpa Raj's reign intensifies as he battles new enemies 
          and old rivals in this explosive sequel. Action-packed sequences meet powerful 
          performances in this blockbuster Telugu action drama that took the box office by storm.
        </p>
        <div className="hero-buttons">
          <button className="btn-play">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v14l11-7-11-7z"/>
            </svg>
            Play
          </button>
          <button className="btn-info">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
