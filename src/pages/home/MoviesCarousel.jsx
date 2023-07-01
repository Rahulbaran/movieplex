import { Link } from "react-router-dom";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Hooks
import use3dAnimation from "../../hooks/use3dAnimation";

export default function MoviesCarousel({ movies }) {
  const { animateCard, removeAnimation } = use3dAnimation();

  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000 }}
      grabCursor={true}
      loop={true}
    >
      {movies.slice(0, 7).map(movie => {
        return (
          <SwiperSlide
            key={movie.id}
            style={{
              backgroundImage: `linear-gradient(to top, oklch(2% .05 200 / .9), oklch(10% 0.05 200 / .6)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
            className="movie-swiper"
          >
            <div className="movie-content">
              <Link to={`/movie/${movie.id}`}>
                <h2>{movie.title}</h2>
              </Link>
              <p>
                {movie.overview.length > 300
                  ? `${movie.overview.slice(0, 300)}...`
                  : movie.overview}
              </p>
              <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                Know More
              </Link>
            </div>

            <div className="movie-image-container">
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                srcSet={`https://image.tmdb.org/t/p/w300${movie.poster_path} 300w, https://image.tmdb.org/t/p/w400${movie.poster_path} 400w, https://image.tmdb.org/t/p/w500${movie.poster_path} 500w`}
                alt={movie.title}
                loading="lazy"
                decoding="async"
                width="380"
                height="550"
                onMouseMove={animateCard}
                onMouseOut={removeAnimation}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
