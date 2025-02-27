import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <Link to={`/movie/${movie.imdbID}`}>
        <button>View Details</button>
      </Link>
      <button>Add to Favourites ❤️</button>
    </div>
  );
};

export default MovieCard;
