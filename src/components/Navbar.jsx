import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favourites">Favourites</Link>
    </nav>
  );
};

export default Navbar;
