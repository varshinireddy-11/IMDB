import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
};

export default App;
