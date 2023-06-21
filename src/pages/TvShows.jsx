import { useState, useEffect } from "react";
import axios from "axios";

// Hooks
import useMeta from "../hooks/useMeta";

// Components
import Loader from "../components/Loader";

export default function TvShows() {
  useMeta({ title: "TvShows | Movieplex", description: "" });

  const [page, setPage] = useState(1);
  const [res, setRes] = useState({ status: "", shows: [] });
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    const fetchShows = async () => {
      try {
        const response = await axios(
          `/.netlify/functions/getShows?page=${page}`
        );
        setRes(prev => ({
          status: "success",
          shows: [...prev.shows, ...response.data.shows.results]
        }));
      } catch (error) {
        setRes({ status: "fail", error });
      }
    };
    fetchShows();
  }, [page, initialRender]);

  const loadShows = () => {
    setPage(prevPage => prevPage + 1);
  };

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
      <h1>Shows</h1>
      {res.shows.map(show => (
        <p key={show.id}>{show.name}</p>
      ))}
      <button onClick={loadShows}>Load more</button>
    </section>
  );
}
