import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import "../App.css";

const Home = ({ addFavourite }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovies = async (search) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=5c51d661`
    );
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <div className="home-container">
      <SearchBar search={search} setSearch={setSearch} />
      {movies.length === 0 ? (
        <p className="no-movies">No Movies Found 🔍</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} addFavourite={addFavourite} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
