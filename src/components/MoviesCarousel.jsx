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
      autoplay={{ delay: 5000 }}
      grabCursor={true}
      loop={true}
    >
      {movies.slice(0, 5).map(movie => {
        return (
          <SwiperSlide
            key={movie.id}
            style={{
              backgroundImage: `linear-gradient(to top, oklch(2% .05 200 / .7), oklch(10% 0.05 200 / .3)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
            className="movie-swiper"
          ></SwiperSlide>
        );
      })}
    </Swiper>
  );
}
