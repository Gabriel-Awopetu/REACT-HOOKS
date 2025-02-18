import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import for Routes
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails"; // Import MovieDetails component
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>My Movie App</h1>

        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Home route that renders the MovieList */}
          <Route path="/" element={<MovieList />} />

          {/* Route for individual movie details */}
          <Route path="/movie/:title" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
