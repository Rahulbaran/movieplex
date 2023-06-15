import { Link } from "react-router-dom";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function MoviesCarousel({ movies }) {
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
              backgroundImage: `linear-gradient(to top, oklch(2% .05 200 / .85), oklch(10% 0.05 200 / .6)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
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
              <Link to={`/movie/${movie.id}`}>Know More</Link>
            </div>

            <div className="movie-image-container">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
                decoding="async"
                width="350"
                height="480"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
