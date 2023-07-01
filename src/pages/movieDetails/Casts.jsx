export default function Casts({ casts }) {
  const top_casts = casts
    .filter(cast => cast.known_for_department === "Acting")
    .slice(0, 15);
  const writers = casts.filter(cast => cast.known_for_department === "Writing");
  const directors = casts.filter(
    cast => cast.known_for_department === "Directing"
  );

  return (
    <section className="casts-section">
      <h2 className="casts-heading">Top Casts</h2>

      <div className="casts">
        {top_casts.map(cast => (
          <div className="cast" key={cast.id}>
            <div className="cast-avatar">
              <img
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                alt={cast.name}
                loading="lazy"
                decoding="async"
                width="100"
                height="100"
              />
            </div>
            <div className="cast-info">
              <h5>{cast.original_name}</h5>
              <span>{cast.character}</span>
            </div>
          </div>
        ))}
      </div>

      {writers.length > 0 && (
        <>
          <hr />
          <div className="writers">
            <p>
              <strong>{writers.length === 1 ? "Writer" : "Writers"} - </strong>
              <span>{writers.map(writer => writer.name).join(", ")}</span>
            </p>
          </div>
        </>
      )}

      {directors.length > 0 && (
        <>
          <hr />
          <div className="directors">
            <p>
              <strong>
                {directors.length === 1 ? "Director" : "Directors"} -{" "}
              </strong>
              <span>{directors.map(director => director.name).join(", ")}</span>
            </p>
          </div>
        </>
      )}
    </section>
  );
}
