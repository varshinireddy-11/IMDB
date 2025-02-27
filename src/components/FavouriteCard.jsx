import React from "react";
import "../App.css"; // Importing Global CSS

const FavouriteCard = ({ movie, removeFavourite }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>⭐ {movie.Year}</p>
      <button onClick={() => removeFavourite(movie)}>
        Remove from Favourites ❌
      </button>
    </div>
  );
};

export default FavouriteCard;
