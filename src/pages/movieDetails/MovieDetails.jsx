import { useState } from "react";

import useMeta from "../../hooks/useMeta";

export default function MovieDetails() {
  const [movie, setMovie] = useState({ title: "Random movie", overview: "" });
  useMeta({
    title: `${movie.title} | Movieplex`,
    description: movie.overview.slice(0, 140)
  });

  return (
    <main className="container movie-details-container">
      <h1>Movie Details Container</h1>
    </main>
  );
}