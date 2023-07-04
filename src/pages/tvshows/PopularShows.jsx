// Hooks
import useMeta from "../../hooks/useMeta";
import useFetchShows from "../../hooks/useFetchShows";

// Components
import Card from "../../components/Card";
import InitialLoader from "../../components/InitialLoader";

export default function PopularShows() {
  useMeta({ title: "TVShows | Movieplex", description: "" });
  const [res, loadShows] = useFetchShows();

  if (res.status !== "success") return <InitialLoader />;

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
