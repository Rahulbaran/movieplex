import useFetch from "../hooks/useFetch";

import Loader from "../components/Loader";

export default function Home() {
  const response = useFetch("/.netlify/functions/getMovies");

  if (!response.status) {
  return <Loader />;
  } else if (response.status === "fail") {
    return (
      <main className="container error-container">
        <h1>{response.error.message}</h1>
        <p>Try again after sometimes</p>
      </main>
    );
  }

  return (
    <main className="container home-container">
      <h1>Home Container</h1>
    </main>
  );
}
