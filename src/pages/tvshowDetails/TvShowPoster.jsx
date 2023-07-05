import { MdStar } from "react-icons/md";

// Custom Hooks
import useMeta from "../../hooks/useMeta";
import use3dAnimation from "../../hooks/use3dAnimation";

export default function TvShowPoster({ tvshow }) {
  useMeta({
    title: `${tvshow.showInfo.original_name} | Movieplex`,
    description: tvshow.showInfo.overview.trim().slice(0, 160)
  });

  const { animateCard, removeAnimation } = use3dAnimation();

  return (
    <section
      className="tvshow-poster-section"
      style={{
        backgroundImage: `linear-gradient(to top, oklch(2% .05 200 / .8), oklch(10% 0.05 200 / .5)), url(https://image.tmdb.org/t/p/w1280${tvshow.showInfo.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="tvshow-image-container">
        <img
          src={`https://image.tmdb.org/t/p/w342${tvshow.showInfo.poster_path}`}
          srcSet={`https://image.tmdb.org/t/p/w300${tvshow.showInfo.poster_path} 300w, https://image.tmdb.org/t/p/w400${tvshow.showInfo.poster_path} 400w, https://image.tmdb.org/t/p/w500${tvshow.showInfo.poster_path} 500w`}
          alt={tvshow.showInfo.original_name}
          loading="lazy"
          decoding="async"
          width="380"
          height="550"
          onMouseMove={animateCard}
          onMouseOut={removeAnimation}
        />
      </div>

      <div className="tvshow-content">
        <h1 className="tvshow-title">{tvshow.showInfo.original_name}</h1>

        <div className="tvshow-rating">
          <MdStar />
          <span>{tvshow.showInfo.vote_average.toFixed(1)}</span>
          <span>({`${(tvshow.showInfo.vote_count / 1000).toFixed(1)}K`})</span>
        </div>

        <div className="tvshow-genres">
          {tvshow.showInfo.genres.map(genre => (
            <span className="tvshow-genre" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
          
        {tvshow.showInfo.overview.length > 0  && <p className="tvshow-description">{tvshow.showInfo.overview}</p>}

        {tvshow.videos.length > 0 && (
          <a
            href={`https://www.youtube.com/watch?v=${
              tvshow.videos.filter(video => video.type === "Trailer").at(-1).key
            }`}
            className="btn btn-primary"
            rel="noopener noreferrer"
            target="_blank"
          >
            Watch Trailer
          </a>
        )}
      </div>
    </section>
  );
}
