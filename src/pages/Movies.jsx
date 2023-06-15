// Hooks
import useMeta from "../hooks/useMeta";
import useFetch from "../hooks/useFetch";

// Components
import Loader from "../components/Loader";

export default function Movies() {
  useMeta({ title: "Movies | Movieplex", description: "" });
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
    <section>
      <h1>Movies Container</h1>
    </section>
  );
}
