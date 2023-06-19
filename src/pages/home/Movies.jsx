import { Link } from "react-router-dom";

import Card from "../../components/Card";

export default function Movies({ movies, title, type }) {
  return (
    <div className="movies">
      <h3>{title}</h3>

      <div className="cards">
        {movies.slice(0, 6).map(movie => (
          <Card data={movie} key={movie.id} />
        ))}
      </div>

      <div className="movies-page-link-container">
        <Link to={`/movies/${type}`} className="btn btn-primary">
          View more
        </Link>
      </div>
    </div>
  );
}
