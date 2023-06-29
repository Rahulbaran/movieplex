import { lazy, Suspense } from "react";

// Custom Hooks
import useMeta from "../../hooks/useMeta";
import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader";
import MoviesCarousel from "./MoviesCarousel";

const Movies = lazy(() => import("./Movies"));
const Shows = lazy(() => import("./Shows"));

export default function Home() {
  useMeta({
    title: "Home | Movieplex",
    description:
      "Discover a world of movies and TV shows with our movie app powered by the TMDB API. Explore popular and top-rated movies and TV shows, search for your favorites, and delve into detailed information and reviews. Enjoy endless entertainment at your fingertips"
  });
  const res = useFetch("/.netlify/functions/getMoviesAndShows");

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
    <main className="container home-container">
      <section className="carousel-wrapper">
        <MoviesCarousel movies={res.movies.popular.results} />
      </section>

      <section className="movies-shows-wrapper">
        <Suspense fallback={<Loader />}>
          <Movies
            movies={res.movies.popular.results}
            title={"Popular Movies"}
            type={"popular"}
          />
          <Movies
            movies={res.movies.top_rated.results}
            title={"Top Rated Movies"}
            type={"top_rated"}
          />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Shows
            shows={res.shows.popular.results}
            title={"Popular Shows"}
            type={"popular"}
          />
          <Shows
            shows={res.shows.top_rated.results}
            title={"Top Rated Shows"}
            type={"top_rated"}
          />
        </Suspense>
      </section>
    </main>
  );
}
