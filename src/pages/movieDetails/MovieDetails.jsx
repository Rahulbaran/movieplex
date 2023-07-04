import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

// Custom Hooks
import useFetch from "../../hooks/useFetch";

// Page Components
import MoviePoster from "./MoviePoster";
import Casts from "./Casts";
import Details from "./Details";
const SimilarMovies = lazy(() => import("./SimilarMovies"));

// Other Components
import Loader from "../../components/Loader";
import InitialLoader from "../../components/InitialLoader";

export default function MovieDetails() {
  const { id: movie_id } = useParams();
  const res = useFetch(
    `/.netlify/functions/getMovieDetails?movie_id=${movie_id}`
  );

  if (res.status !== "success") return <InitialLoader />;

  return (
    <main className="container movie-details-container">
      <MoviePoster movie={res} />
      <Casts casts={res.casts} />
      <Details res={res} />

      <Suspense fallback={<Loader />}>
        {res.similar_movies.length > 0 && (
          <SimilarMovies movies={res.similar_movies} />
        )}
      </Suspense>
    </main>
  );
}
