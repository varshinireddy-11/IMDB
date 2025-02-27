import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState("");

  const searchMovies = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      setMovies(data.Search || []);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search Movies..."
      value={query}
      onChange={searchMovies}
      className="search-input"
    />
  );
};

export default SearchBar;
