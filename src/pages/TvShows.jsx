// Hooks
import useMeta from "../hooks/useMeta";
import useFetch from "../hooks/useFetch";

// Components
import Loader from "../components/Loader";

export default function TvShows() {
  useMeta({ title: "TvShows | Movieplex", description: "" });
  const res = useFetch("/.netlify/functions/getShows");

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
    <section>
      <h1>TvShows Container</h1>
    </section>
  );
}
