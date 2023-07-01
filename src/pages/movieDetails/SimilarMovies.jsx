import Card from "../../components/Card";

export default function SimilarMovies({ movies }) {
  return (
    <section className="movie-section similar-movies-section">
      <h2>More Like This</h2>

      <div className="similar-movies">
        {movies.map(movie => (
          <Card data={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
