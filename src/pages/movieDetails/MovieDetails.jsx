import { useParams } from "react-router-dom";

// Custom Hooks
import useFetch from "../../hooks/useFetch";

// Components
import MoviePoster from "./MoviePoster";
import Casts from "./Casts";
import Details from "./Details";
import SimilarMovies from "./SimilarMovies";
import Loader from "../../components/Loader";

export default function MovieDetails() {
  const { id: movie_id } = useParams();
  const res = useFetch(
    `/.netlify/functions/getMovieDetails?movie_id=${movie_id}`
  );

  if (!res.status) {
    return <Loader />;
  } else if (res.status === "fail") {
    return (
      <main className="container error-container">
        <h1>{res.error.message}</h1>
        <p>Try again after sometimes</p>
      </main>
    );
  }

  return (
    <main className="container movie-details-container">
      <MoviePoster movie={res} />
      <Casts casts={res.casts} />
      <Details res={res} />
      <SimilarMovies movies={res.similar_movies} />
    </main>
  );
}
