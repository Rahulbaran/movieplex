import modifyDate from "../../utils/modifyDate";
import modifyRuntime from "../../utils/modifyRuntime";

export default function Details({ res }) {
  const {
    spoken_languages: languages,
    runtime,
    release_date,
    production_companies,
    homepage
  } = res.movieInfo;

  return (
    <section className="movie-section details-section">
      <h2>More Details</h2>

      <div className="movie-general-details">
        <hr />
        <div className="release-date">
          <p className="movie-info-para">
            <strong>Release date</strong>
            <span>{modifyDate(release_date)}</span>
          </p>
        </div>
        <hr />

        <div className="runtime">
          <p className="movie-info-para">
            <strong>Runtime</strong>
            <span>{modifyRuntime(runtime)}</span>
          </p>
        </div>
        <hr />

        <div className="official-site">
          <p className="movie-info-para">
            <strong>Official site</strong>
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              Visit here
            </a>
          </p>
        </div>
        <hr />

        <div className="language">
          <p className="movie-info-para">
            <strong>{languages.length > 1 ? "Languages" : "Language"}</strong>
            <span>{languages.map(lang => lang.english_name).join(", ")}</span>
          </p>
        </div>
        <hr />

        <div className="production-companies">
          <p className="movie-info-para">
            <strong>Production companies</strong>
            <span>
              {production_companies.map(comp => comp.name).join(", ") ||
                "<Data not available>"}
            </span>
          </p>
        </div>
        <hr />
      </div>
    </section>
  );
}
