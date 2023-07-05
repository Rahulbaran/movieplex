import Card from "../../components/Card";

export default function SimilarTvShows({ shows }) {
  return (
    <section className="tvshow-section similar-tvshows-section">
      <h2>More Like This</h2>

      <div className="similar-tvshows">
        {shows.map(show => (
          <Card data={show} key={show.id} />
        ))}
      </div>
    </section>
  );
}
