import React, { useEffect, useState } from "react";
import axios from "axios";
import ColorThief from "colorthief";
import MovieDetail from "../components/MovieDetail";
import { Link, useParams } from "react-router-dom";
import baseUrl from "../utils/baseUrl";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "../components/Header";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.8)");
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`${baseUrl}/api/movies/${params.id}`);
      setMovie(response.data);

      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = response.data.image;

      img.onload = () => {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        setBgColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`);
      };
      setLoading(false);
    };
    fetchMovie();
  }, [params.id]);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Header />
      <div className="movie-detail-page">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <button className="back-button">Back to Home</button>
        </Link>

        {loading ? (
          <div
            style={{
              width: "800px",
              backgroundColor: "#ccc",
              height: "300px",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Skeleton width={"40%"} height={40} count={1} />
            <br />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"100%"} />
              <Skeleton width={"60%"} />
            </div>
          </div>
        ) : (
          <MovieDetail movie={movie} />
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;
