import { MdStar } from "react-icons/md";

// Custom Hooks
import useMeta from "../../hooks/useMeta";

export default function MoviePoster({ movie }) {
  useMeta({
    title: `${movie.movieInfo.title} | Movieplex`,
    description: movie.movieInfo.overview.trim().slice(0, 160)
  });

  return (
    <section
      className="movies-poster-section"
      style={{
        backgroundImage: `linear-gradient(to top, oklch(2% .05 200 / .8), oklch(10% 0.05 200 / .5)), url(https://image.tmdb.org/t/p/w1280${movie.movieInfo.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="movie-image-container">
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.movieInfo.poster_path}`}
          srcSet={`https://image.tmdb.org/t/p/w300${movie.movieInfo.poster_path} 300w, https://image.tmdb.org/t/p/w400${movie.movieInfo.poster_path} 400w, https://image.tmdb.org/t/p/w500${movie.movieInfo.poster_path} 500w`}
          alt={movie.movieInfo.title}
          loading="lazy"
          decoding="async"
          width="380"
          height="550"
        />
      </div>

      <div className="movie-content">
        <h1 className="movie-title">{movie.movieInfo.title}</h1>

        <div className="movie-rating">
          <MdStar />
          <span>{movie.movieInfo.vote_average.toFixed(1)}</span>
          <span>({`${(movie.movieInfo.vote_count / 1000).toFixed(1)}K`})</span>
        </div>

        <div className="movie-genres">
          {movie.movieInfo.genres.map(genre => (
            <span className="movie-genre" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>

        <p className="movie-description">{movie.movieInfo.overview}</p>

        <a
          href={`https://www.youtube.com/watch?v=${
            movie.videos.filter(video => video.type === "Trailer").at(-1).key
          }`}
          className="btn btn-primary"
          rel="noopener noreferrer"
          target="_blank"
        >
          Watch Trailer
        </a>
      </div>
    </section>
  );
}
