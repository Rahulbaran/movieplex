import { useState, useEffect } from "react";
import axios from "axios";

// Hooks
import useMeta from "../../hooks/useMeta";

// Components
import Loader from "../../components/Loader";
import Card from "../../components/Card";

export default function PopularShows() {
  useMeta({ title: "TVShows | Movieplex", description: "" });

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

  const loadShows = () => setPage(prevPage => prevPage + 1);

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
