import React, { useEffect, useState } from "react";
import '../App.css';

const Favourites = () => {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavMovies(fav);
  }, []);

  return (
    <div>
      <h1>My Favourite Movies</h1>
      {favMovies.length > 0 ? (
        favMovies.map((movie, index) => <h3 key={index}>{movie.Title}</h3>)
      ) : (
        <p>No Favourite Movies Yet</p>
      )}
    </div>
  );
};

export default Favourites;
