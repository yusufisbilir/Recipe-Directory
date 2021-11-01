import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

//Style
import "./Navbar.sass";

function navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Recipe Directory</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default navbar;
