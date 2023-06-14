import useFetch from "../hooks/useFetch";

import Loader from "../components/Loader";
import MoviesCarousel from "../components/MoviesCarousel";

export default function Home() {
  const res = useFetch("/.netlify/functions/getMovies");

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
        <MoviesCarousel movies={res.response.results} />
      </section>
    </main>
  );
}
