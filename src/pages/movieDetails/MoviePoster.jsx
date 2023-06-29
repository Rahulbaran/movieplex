import useMeta from "../../hooks/useMeta";

export default function MoviePoster({ movie }) {
  useMeta({
    title: `${movie.title} | Movieplex`,
    description: movie.overview.trim().slice(0, 160)
  });

  return <section className="movies-poster-section"></section>;
}
