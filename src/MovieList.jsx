import React, { useState } from "react";
import MovieCard from "./MovieCard";
import moviesData from "./movies";
import Filter from "./Filter";
import AddMovie from "./AddMovie";

function MovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [filters, setFilters] = useState({ title: "", rating: "" });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter movies based on search criteria
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === "" || movie.rating >= parseFloat(filters.rating))
    );
  });

  return (
    <div>
      <Filter onFilter={setFilters} />
      <AddMovie onAdd={addMovie} />
      <div style={styles.moviesContainer}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

// Styles
const styles = {
  moviesContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
};

export default MovieList;
