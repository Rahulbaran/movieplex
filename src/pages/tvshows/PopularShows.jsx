// Hooks
import useMeta from "../../hooks/useMeta";
import useFetchShows from "../../hooks/useFetchShows";

// Components
import Loader from "../../components/Loader";
import Card from "../../components/Card";

export default function PopularShows() {
  useMeta({ title: "TVShows | Movieplex", description: "" });
  const [res, loadShows] = useFetchShows();

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
        {res.shows.map(show => (
          <Card data={show} key={show.id} />
        ))}
      </section>

      <section className="load-more-container">
        <button className="btn btn-primary" onClick={loadShows}>
          Load more
        </button>
      </section>
    </>
  );
}
