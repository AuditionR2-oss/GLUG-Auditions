import React from 'react';
import './MovieRow.css';
import MovieCard from './MovieCard';

function MovieRow({ title, movies, hoveredMovie, setHoveredMovie }) {
  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isHovered={hoveredMovie === movie.id}
              onHover={() => setHoveredMovie(movie.id)}
              onLeave={() => setHoveredMovie(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
