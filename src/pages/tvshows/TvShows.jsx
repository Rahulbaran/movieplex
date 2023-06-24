import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Hooks
import useMeta from "../../hooks/useMeta";
import useFetchShows from "../../hooks/useFetchShows";

// Components
import Loader from "../../components/Loader";
import Card from "../../components/Card";

// Utils
import { modifyTitle } from "../../utils/modifyTitle";

export default function Shows() {
  const curType = useParams().type;
  useMeta({
    title: `${modifyTitle(curType)} Shows | Movieplex`,
    description: ""
  });

  const [type, setType] = useState(curType);
  const [res, loadShows, setRes, setPage] = useFetchShows(type);

  useEffect(() => {
    if (type !== curType) {
      setType(curType);
      setRes({ status: "", shows: [] });
      setPage(1);
    }
  }, [type, setRes, setPage, curType]);

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
