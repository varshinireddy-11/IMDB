import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../App.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
      .then((res) => setMovie(res.data));
  }, [id]);

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
