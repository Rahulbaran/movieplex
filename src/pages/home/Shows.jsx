import { Link } from "react-router-dom";

import Card from "../../components/Card";

export default function Shows({ shows, title, type }) {
  return (
    <div className="shows">
      <h3>{title}</h3>

      <div className="cards">
        {shows.slice(0, 6).map(show => (
          <Card data={show} key={show.id} />
        ))}
      </div>

      <div className="tvshows-page-link-container">
        <Link to={`/tvshows/${type}`} className="btn btn-primary">
          View more
        </Link>
      </div>
    </div>
  );
}
