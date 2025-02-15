import React, { useState } from "react";

function Filter({ onFilter }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleFilterChange = () => {
    onFilter({ title, rating });
  };

  return (
    <div style={styles.container}>
      {/* Search by Title */}
      <input
        type="text"
        placeholder="Search by title..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          handleFilterChange();
        }}
        style={styles.input}
      />

      {/* Filter by Rating */}
      <select
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
          handleFilterChange();
        }}
        style={styles.select}
      >
        <option value="">All Ratings</option>
        <option value="4.9">4.9+</option>
        <option value="4.8">4.8+</option>
        <option value="4.7">4.7+</option>
        <option value="4.5">4.5+</option>
      </select>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
  },
  select: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default Filter;
