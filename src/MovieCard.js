import React, { useState, useRef, useEffect } from 'react';
import './MovieCard.css';

function MovieCard({ movie, isHovered, onHover, onLeave }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      // Delay video playback slightly for better UX
      hoverTimeoutRef.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(err => {
            console.log('Video play failed:', err);
          });
          setIsPlaying(true);
        }
      }, 500);
    } else {
      // Clear timeout if user leaves before video starts
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setIsPlaying(false);
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div 
      className={`movie-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="card-image">
        <img 
          src={movie.thumbnail} 
          alt={movie.title}
          className={isPlaying ? 'hidden' : ''}
        />
        {isHovered && (
          <video
            ref={videoRef}
            className="card-video"
            src={movie.trailer}
            muted
            loop
            playsInline
          />
        )}
      </div>

      {isHovered && (
        <div className="card-overlay">
          <div className="card-content">
            <h3 className="card-title">{movie.title}</h3>
            
            <div className="card-actions">
              <button className="action-btn primary" title="Play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v14l11-7-11-7z"/>
                </svg>
              </button>
              
              <button className="action-btn" title="Add to List">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
              
              <button className="action-btn" title="Like">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
              </button>
              
              <button className="action-btn more-info" title="More Info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </div>

            <div className="card-meta">
              <span className="match">{movie.rating}</span>
              <span className="year">{movie.year}</span>
              {movie.duration && <span className="duration">{movie.duration}</span>}
            </div>
            
            <div className="card-genre">{movie.genre}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
