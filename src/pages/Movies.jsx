import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// Hooks
import useMeta from "../hooks/useMeta";

// Components
import Loader from "../components/Loader";

export default function Movies() {
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

  const loadMovies = () => {
    setPage(prevPage => prevPage + 1);
  };

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
      <header className="movies-header">
        <h1>Movies</h1>
      </header>

      <nav className="movies-navigation">
        <ul>
          <li>
            <NavLink to="/movies/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/movies/trending">Trending</NavLink>
          </li>
          <li>
            <NavLink to="/movies/top_rated">Top rated</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
