import { useState, useEffect } from "react";
import axios from "axios";

// Hooks
import useMeta from "../../hooks/useMeta";

// Components
import Loader from "../../components/Loader";
import Card from "../../components/Card";

export default function PopularMovies() {
  useMeta({ title: "Movies | Movieplex", description: "" });

  const [page, setPage] = useState(1);
  const [res, setRes] = useState({ status: "", movies: [] });
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    const fetchMovies = async () => {
      try {
        const response = await axios(
          `/.netlify/functions/getMovies?page=${page}`
        );
        setRes(prev => ({
          status: "success",
          movies: [...prev.movies, ...response.data.movies.results]
        }));
      } catch (error) {
        setRes({ status: "fail", error });
      }
    };

    fetchMovies();
  }, [page, initialRender]);

  const loadMovies = () => setPage(prevPage => prevPage + 1);

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