import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "./api-service.js";
import MoviesList from "../component/MoviesList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h2>Trending Today</h2>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}
