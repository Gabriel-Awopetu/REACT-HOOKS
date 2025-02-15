import React from "react";
import MovieList from "./MovieList";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>My Movie App</h1>
      <MovieList />
    </div>
  );
}

export default App;
