import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      to={"/movie/" + movie._id}
    >
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <div className="movie-card-content">
          <img src={movie.image} alt={movie.title} />
          <p>{movie.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
