import modifyDate from "../../utils/modifyDate";

export default function MoreDetails({ res }) {
  const {
    spoken_languages: languages,
    production_companies,
    first_air_date,
    homepage,
    number_of_seasons,
    number_of_episodes
  } = res.showInfo;

  return (
    <section className="tvshow-section tvshow-details-section">
      <h2>More Details</h2>

      <div className="tvshow-general-details">
        <hr />
        <div className="release-date">
          <p className="tvshow-info-para">
            <strong>First air date</strong>
            <span>{modifyDate(first_air_date)}</span>
          </p>
        </div>
        <hr />

        <div className="total-episodes">
          <p className="tvshow-info-para">
            <strong>Total Episodes</strong>
            <span>{number_of_episodes}</span>
          </p>
        </div>
        <hr />

        <div className="total-seasons">
          <p className="tvshow-info-para">
            <strong>Total Seasons</strong>
            <span>{number_of_seasons}</span>
          </p>
        </div>
        <hr />

        <div className="official-site">
          <p className="tvshow-info-para">
            <strong>Official site</strong>
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              Visit here
            </a>
          </p>
        </div>
        <hr />

        <div className="language">
          <p className="tvshow-info-para">
            <strong>{languages.length > 1 ? "Languages" : "Language"}</strong>
            <span>{languages.map(lang => lang.english_name).join(", ")}</span>
          </p>
        </div>
        <hr />

        <div className="production-companies">
          <p className="tvshow-info-para">
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
