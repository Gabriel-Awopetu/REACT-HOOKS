import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Link to={`/movie/${title}`} style={styles.cardLink}>
      {" "}
      {/* Wrapping the card in a Link */}
      <div style={styles.card}>
        <img src={posterURL} alt={title} style={styles.image} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <strong>Rating:</strong> {rating} ⭐
        </p>
      </div>
    </Link>
  );
}

// Inline styles for basic styling
const styles = {
  cardLink: {
    textDecoration: "none", // To remove the default underline on the link
    color: "inherit", // Ensures text color remains the same
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default MovieCard;
