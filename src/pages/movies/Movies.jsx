import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Hooks
import useMeta from "../../hooks/useMeta";
import useFetchMovies from "../../hooks/useFetchMovies";

// Components
import Card from "../../components/Card";
import InitialLoader from "../../components/InitialLoader";

// Utils
import { modifyTitle } from "../../utils/modifyTitle";

export default function Movies() {
  const curType = useParams().type;
  useMeta({
    title: `${modifyTitle(curType)} Movies | Movieplex`,
    description: ""
  });

  const [type, setType] = useState(curType);
  const [res, loadMovies, setRes, setPage] = useFetchMovies(type);

  useEffect(() => {
    if (type !== curType) {
      setType(curType);
      setRes({ status: "", movies: [] });
      setPage(1);
    }
  }, [type, setRes, setPage, curType]);

  if (res.status !== "success") return <InitialLoader />;

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
