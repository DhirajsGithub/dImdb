import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import baseUrl from "../utils/baseUrl";
import Header from "../components/Header";

const HomePage = ({ history }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(baseUrl + "/api/movies");
      setMovies(response.data);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="home-page">
        {loading
          ? Array(15)
              .fill()
              .map((_, index) => (
                <div className="movie-card" key={index}>
                  <Skeleton height={50} />
                  <br />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0px 15px",
                    }}
                  >
                    <Skeleton height={200} width={150} />
                    <div>
                      <Skeleton width={100} count={3} />
                      <Skeleton width={80} count={1} />
                    </div>
                  </div>
                </div>
              ))
          : movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
};

export default HomePage;
