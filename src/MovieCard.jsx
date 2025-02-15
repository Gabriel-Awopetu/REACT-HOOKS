import React from "react";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div style={styles.card}>
      <img src={posterURL} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <strong>Rating:</strong> {rating} ⭐
      </p>
    </div>
  );
}

// Inline styles for basic styling
const styles = {
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
