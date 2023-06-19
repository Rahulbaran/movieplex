import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <div className="card" key={data.id}>
      <div className="card-header">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title ? data.title : data.name}
          loading="lazy"
          decoding="async"
        />
      </div>

      <Link className="card-body">
        <div className="rating">
          <MdStar />
          <span>{data.vote_average}</span>
        </div>
        <h4>{data.title ? data.title : data.name}</h4>
        <p>{`${data.overview.slice(0, 150)}...`}</p>
      </Link>
    </div>
  );
}
