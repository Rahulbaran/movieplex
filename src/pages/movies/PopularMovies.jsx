// Hooks
import useMeta from "../../hooks/useMeta";
import useFetchMovies from "../../hooks/useFetchMovies";

// Components
import Loader from "../../components/Loader";
import Card from "../../components/Card";

export default function PopularMovies() {
  useMeta({ title: "Movies | Movieplex", description: "" });
  const [res, loadMovies] = useFetchMovies();

  if (!res.status) {
    return <Loader />;
  } else if (res.status === "fail") {
    return (
      <section className="container error-container">
        <h1>{res.error.message}</h1>
        <p>Try again after sometimes</p>
      </section>
    );
  }

  return (
    <>
      <section className="cards">
        {res.movies.map(movie => (
          <Card data={movie} key={movie.id} />
        ))}
      </section>
      <section className="load-more-container">
        <button className="btn btn-primary" onClick={loadMovies}>
          Load more
        </button>
      </section>
    </>
  );
}
