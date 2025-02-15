import React, { useState } from "react";

function AddMovie({ onAdd }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      onAdd({ ...newMovie, rating: parseFloat(newMovie.rating) });
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (0-5)"
        value={newMovie.rating}
        onChange={handleChange}
        step="0.1"
        min="0"
        max="5"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Add Movie
      </button>
    </form>
  );
}

// Styles
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
    margin: "20px auto",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default AddMovie;
