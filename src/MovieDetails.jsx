import React from "react";
import { useParams, Link } from "react-router-dom"; // Import hooks
import { getMovieByTitle } from "./movies"; // Import getMovieByTitle function

function MovieDetails() {
  const { title } = useParams(); // Use useParams to get the title from the URL
  const movie = getMovieByTitle(title); // Fetch the movie by title

  if (!movie) {
    return <p>Movie not found!</p>; // Handle the case where no movie is found
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "300px" }} />
      <p>{movie.description}</p>
      <p>
        <strong>Rating:</strong> {movie.rating} ⭐
      </p>
      <div>
        <h3>Trailer:</h3>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          frameBorder="0"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
      </div>
      <br />
      <Link to="/">Back to Home</Link>{" "}
      {/* Back to home using Link from react-router-dom */}
    </div>
  );
}

export default MovieDetails;
