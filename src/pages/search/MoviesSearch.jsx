// Custom Hooks
import useMeta from "../../hooks/useMeta";
import useSearch from "../../hooks/useSearch";

// Components
import SearchForm from "./SearchForm";
import Cards from "./Cards";

export default function MoviesSearch() {
  useMeta({ title: "Search Movies | Movieplex", description: "" });
  const [query, res, handleQuery, handleSearchForm] = useSearch("movie");

  return (
    <section className="search-section">
      <div className="search-form-container">
        <SearchForm
          type="movie"
          query={query}
          handleQuery={handleQuery}
          handleSearchForm={handleSearchForm}
        />
      </div>

      {res.status === "fail" || !res.status ? (
        ""
      ) : (
        <div className="cards">
          <Cards data={res.data.results} />
        </div>
      )}
    </section>
  );
}
