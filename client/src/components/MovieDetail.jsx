import React from "react";
import Header from "./Header";

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <div
        className="movie-detail-background-overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          borderRadius: "8px",
        }}
      ></div>

      <div
        className="movie-detail-content"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h1>{movie.title}</h1>
        <p>{movie.longDescription}</p>
      </div>

      <div
        className="movie-detail-background"
        style={{
          backgroundImage: `url(${movie.image})`,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          borderRadius: "8px",
        }}
      ></div>
    </div>
  );
};

export default MovieDetail;
