import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <div className="card" key={data.id}>
      <div className="card-header">
        <img
          src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
          srcSet={`https://image.tmdb.org/t/p/w300${data.poster_path} 300w, https://image.tmdb.org/t/p/w400${data.poster_path} 400w, https://image.tmdb.org/t/p/w500${data.poster_path} 500w`}
          alt={data.title ? data.title : data.name}
          width="300"
          height="400"
          loading="lazy"
          decoding="async"
        />
      </div>

      <Link
        to={data.name ? `/tvshow/${data.id}` : `/movie/${data.id}`}
        className="card-body"
      >
        <div className="rating">
          <MdStar />
          <span>{data.vote_average.toFixed(1)}</span>
        </div>
        <h4>{data.title ? data.title : data.name}</h4>
        <p>{`${data.overview.slice(0, 150)}...`}</p>
      </Link>
    </div>
  );
}
