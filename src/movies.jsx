const movies = [
  {
    title: "Inception",
    description:
      "A thief who enters the dreams of others to steal their secrets must plant an idea into someone's mind.",
    posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    rating: 8.8,
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    title: "Interstellar",
    description:
      "A group of explorers travel through a wormhole in space to ensure humanity's survival.",
    posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    rating: 8.6,
    trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    title: "The Dark Knight",
    description:
      "Batman must accept his greatest psychological and physical tests when he faces the Joker.",
    posterURL: "https://m.media-amazon.com/images/I/51EbJjl7UQL._AC_.jpg",
    rating: 9.0,
    trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    title: "Movie 1",
    description: "This is the description of movie 1.",
    posterURL: "image-url",
    rating: 5,
    trailerLink: "https://www.youtube.com/embed/xxxxxx", // Embed link
  },
  // Add more movies if needed...
];

// Update this to allow accessing a movie by its title
export function getMovieByTitle(title) {
  return movies.find((movie) => movie.title === title);
}

export default movies;
